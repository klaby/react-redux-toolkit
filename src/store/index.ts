import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./counter.store";

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
