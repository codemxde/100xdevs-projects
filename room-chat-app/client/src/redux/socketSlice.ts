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
      state.websocket = new WebSocket("ws://localhost:8080");
    },
    closeSocket(state) {
      state.websocket = null;
    },
  },
});

export const { setSocket, closeSocket } = socketSlice.actions;
export default socketSlice.reducer;
