import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080", // 서버의 주소로 변경해야 함
});

export const getNewAccessToken = async (refreshToken) => {
  try {
    // 서버로 RefreshToken을 보내어 새로운 AccessToken을 받아옴
    const response = await api.post("/token", { refreshToken });
    const newAccessToken = response.data.accessToken;
    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
};
