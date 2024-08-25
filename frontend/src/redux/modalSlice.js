import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    modalType: null,
  },
  reducers: {
    openModal: (state, action) => {
      if (!state.isModalOpen) {
        // 모달이 이미 열려있는지 확인
        state.isModalOpen = true;
        state.modalType = action.payload;
      }
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
