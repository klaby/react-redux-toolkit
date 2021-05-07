import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./count.store";

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
