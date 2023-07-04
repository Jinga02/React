import useInput from '@hooks/useInput';
import { Button, Error, Form, Header, Input, Label, LinkContainer, Success } from '@pages/SignUp/styles';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router';
import useSWR from 'swr';

const SignUp = () => {
  const { data: userData, error, mutate } = useSWR('/api/users', fetcher);

  // email과 nickname은 중복 / 중복 해결을 위해 useInput hooks 직접 만들기
  const [email, onChangeEmail, setEmail] = useInput('');
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  // 비밀번호 확인
  const [mismatchError, setMismatchError] = useState(false);
  // 가입 실패
  const [signUpError, setSignUpError] = useState('');
  // 가입 성공
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  // const onChangeEmail = useCallback((e) => {
  //   setEmail(e.target.value);
  // }, []);

  // const onChangeNickname = useCallback((e) => {
  //   setNickname(e.target.value);
  // }, []);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    // 함수 기준 외부 변수만 deps[]에 작성
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!mismatchError && nickname) {
        console.log('서버로 회원가입하기');
        // 요청 전 초기화
        // 요청을 여러번 할때 초기값이 이상할 수 있으니
        setSignUpError('');
        setSignUpSuccess(false);
        axios
          .post('/api/users', { email, nickname, password })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error);
            setSignUpError(error.response.data);
          })
          // 성공하든 실패하든 실행
          .finally(() => {});
      }
    },
    // deps[]에 함수 안에서 쓰이는 변수(state)를 다 넣어야함 그래야 업데이트가 된다.
    // useCallback이 기억해둬라 값들을 언제까지? deps []에 있는 값이 하나라도 바뀔때까지
    [email, nickname, password, passwordCheck],
  );

  if (userData === undefined) {
    return <div>로딩중...</div>;
  }

  if (userData) {
    return <Redirect to="/workspace/sleact/channel/일반" />;
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
