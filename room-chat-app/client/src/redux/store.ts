import { configureStore } from "@reduxjs/toolkit";
import socket from "./socketSlice";

const store = configureStore({
  reducer: {
    socket,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
