import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, { payload }: PayloadAction<number>) => {
      state.count += payload;
    },

    decrement: (state, { payload }: PayloadAction<number>) => {
      state.count -= payload;
    },
  },
});

export const { decrement, increment } = counterSlice.actions;

export const incrementAsync = (quantity: number): ReduxThunk => async (
  dispatch: ReduxDispatch
) => setTimeout(() => Promise.resolve(dispatch(increment(quantity))), 2000);

export const decrementAsync = (quantity: number): ReduxThunk => async (
  dispatch: ReduxDispatch
) => setTimeout(() => Promise.resolve(dispatch(decrement(quantity))), 2000);

export default counterSlice.reducer;
