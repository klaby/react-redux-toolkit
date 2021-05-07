import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { decrement, increment } = countSlice.actions;

export const incrementAsync = (): ReduxThunk => async (
  dispatch: ReduxDispatch
) => setTimeout(() => Promise.resolve(dispatch(increment())), 2000);

export default countSlice.reducer;
