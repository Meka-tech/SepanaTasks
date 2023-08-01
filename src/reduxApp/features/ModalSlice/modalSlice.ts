import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  ModalOpen: boolean;
}

const initialState: ModalState = {
  ModalOpen: false
};

const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    OpenModal: (state) => {
      state.ModalOpen = true;
    },
    CloseModal: (state) => {
      state.ModalOpen = false;
    }
  }
});

export const { OpenModal, CloseModal } = ModalSlice.actions;

export default ModalSlice.reducer;
