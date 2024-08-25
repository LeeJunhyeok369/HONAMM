import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
  },
});

export default store;
