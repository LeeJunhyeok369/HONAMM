// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state) => {
      state.isAuthenticated = true;
      // state.user = state.user;
      state.token = state.key;
      console.log(state);
      // 토큰과 사용자 정보를 로컬 스토리지에 저장
      localStorage.setItem("authToken", state.key);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;

      // 로컬 스토리지에서 토큰과 사용자 정보를 제거
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    },
    restoreAuthState: (state) => {
      state.isAuthenticated = true;
      // state.user = state.user;
      state.token = state.key;
    },
  },
});

export const { setCredentials, logout, restoreAuthState } = authSlice.actions;

export default authSlice.reducer;
