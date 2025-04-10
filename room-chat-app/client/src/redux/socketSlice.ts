import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  websocket: WebSocket | null;
}

const initialState: InitialState = {
  websocket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket(state) {
      if (!state.websocket) {
        state.websocket = new WebSocket("ws://localhost:8080");
      }
    },
    closeSocket(state) {
      if (state.websocket) {
        state.websocket = null;
      }
    },
  },
});

export const { setSocket, closeSocket } = socketSlice.actions;
export default socketSlice.reducer;
