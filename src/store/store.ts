import { configureStore } from "@reduxjs/toolkit";

import memoryGameSlice from "./memoryGameSlice";

export const store = configureStore({
  reducer: {
    memoryGame: memoryGameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
