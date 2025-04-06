import { configureStore } from "@reduxjs/toolkit";

import modal from "./modalSlice.js";

export const store = configureStore({
  reducer: {
    modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
