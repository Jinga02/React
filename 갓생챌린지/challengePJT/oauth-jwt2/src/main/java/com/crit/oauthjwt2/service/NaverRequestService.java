package com.crit.oauthjwt2.service;

import com.crit.oauthjwt2.common.security.SecurityUtil;
import com.crit.oauthjwt2.dto.*;
import com.crit.oauthjwt2.entity.User;
import com.crit.oauthjwt2.entity.UserRepository;
import com.crit.oauthjwt2.enumType.AuthProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class NaverRequestService implements RequestService {
    private final UserRepository userRepository;
    private final SecurityUtil securityUtil;
    private final WebClient webClient;

    @Value("${spring.security.oauth2.client.registration.naver.authorization-grant-type}")
    private String GRANT_TYPE;

    @Value("${spring.security.oauth2.client.registration.naver.client-id}")
    private String CLIENT_ID;

    @Value("${spring.security.oauth2.client.registration.naver.client-secret}")
    private String CLIENT_SECRET;

    @Value("${spring.security.oauth2.client.provider.naver.token-uri}")
    private String TOKEN_URI;

    @Value("${spring.security.oauth2.client.provider.naver.user-info-uri}")
    private String USER_INFO_URI;

    @Override
    public OAuthSignInResponse redirect(TokenRequest tokenRequest) {
        TokenResponse tokenResponse = getToken(tokenRequest);
        NaverUserInfo naverUserInfo = getUserInfo(tokenResponse.getAccessToken());

        TokenDto accessTokenDto = securityUtil.createAccessToken(
                naverUserInfo.getResponse().getId(), AuthProvider.NAVER, tokenResponse.getAccessToken());
        TokenDto refreshTokenDto = securityUtil.createRefreshToken(
                naverUserInfo.getResponse().getId(), AuthProvider.NAVER, tokenResponse.getRefreshToken());

        OAuthSignInResponse oAuthSignInResponse = OAuthSignInResponse.builder()
                .authProvider(AuthProvider.NAVER)
                .id(naverUserInfo.getResponse().getId())
                .nickname(naverUserInfo.getResponse().getName())
                .email(naverUserInfo.getResponse().getEmail())
                .accessToken(accessTokenDto.getToken())
                .refreshToken(refreshTokenDto.getToken())
                .build();

        if(!userRepository.existsById(naverUserInfo.getResponse().getId())){
            User userEntity = oAuthSignInResponse.toEntity();
            userRepository.save(userEntity);
        }

        return oAuthSignInResponse;

    }

    @Override
    public TokenResponse getToken(TokenRequest tokenRequest) {
        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("grant_type", GRANT_TYPE);
        formData.add("client_id", CLIENT_ID);
        formData.add("client_secret", CLIENT_SECRET);
        formData.add("code", tokenRequest.getCode());
        formData.add("state", tokenRequest.getState());

        return webClient.mutate()
                .baseUrl(TOKEN_URI)
                .build()
                .post()
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(BodyInserters.fromFormData(formData))
                .retrieve()
//                .onStatus(HttpStatus::is4xxClientError, response -> Mono.just(new BadRequestException()))
                .bodyToMono(TokenResponse.class)
                .block();
    }

    @Override
    public NaverUserInfo getUserInfo(String accessToken) {
        return webClient.mutate()
                .baseUrl(USER_INFO_URI)
                .build()
                .get()
                .headers(h -> h.setBearerAuth(accessToken))
                .retrieve()
                .bodyToMono(NaverUserInfo.class)
                .block();
    }

    @Override
    public TokenResponse getRefreshToken(String provider, String refreshToken) {
        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("grant_type", "refresh_token");
        formData.add("client_id", CLIENT_ID);
        formData.add("refresh_token", refreshToken);

        return webClient.mutate()
                .baseUrl(TOKEN_URI)
                .build()
                .post()
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(BodyInserters.fromFormData(formData))
                .retrieve()
//                .onStatus(HttpStatus::is4xxClientError, response -> Mono.just(new BadRequestException()))
                .bodyToMono(TokenResponse.class)
                .block();
    }
}
