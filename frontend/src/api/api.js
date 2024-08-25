import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/agri", // baseURL을 서버 주소로 설정
  headers: {
    "Content-Type": "application/json",
  },
});

// 로그인 함수
export const login = async ({ email, password }) => {
  try {
    const response = await apiClient.post("/accounts/login/", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

// 회원가입 함수
export const register = async ({ username, email, password1, password2 }) => {
  try {
    const response = await apiClient.post("/accounts/registration/", {
      username,
      email,
      password1,
      password2,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Registration Error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 로그아웃 함수
export const logout = async () => {
  try {
    const response = await apiClient.post("/accounts/logout/");
    return response.data;
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};
