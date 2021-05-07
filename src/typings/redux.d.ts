import { ThunkAction, Action } from "@reduxjs/toolkit";
import { store } from "../store";

export {};

declare global {
  export type ReduxState = ReturnType<typeof store.getState>;
  export type ReduxDispatch = typeof store.dispatch;
  export type ReduxThunk = ThunkAction<void, ReduxState, null, Action<string>>;
}
