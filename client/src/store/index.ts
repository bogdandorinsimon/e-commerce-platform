import { configureStore } from "@reduxjs/toolkit";
import appReducer, { AppState } from "./slice";

export type RootState = {
  appState: AppState;
};

export const store = configureStore({
  reducer: {
    appState: appReducer
  }
});

export type AppDispatch = typeof store.dispatch;
