import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  visible: boolean;
}

const initialState: ModalState = {
  visible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.visible = !state.visible;
    },
  },
});

export const { toggleVisibility } = modalSlice.actions;
export default modalSlice.reducer;
