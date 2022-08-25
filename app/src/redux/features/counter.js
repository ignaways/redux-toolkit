import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  num: 1
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += state?.num;
    },
    decrement: (state) => {
      state.count -= state?.num;
    },
    setNumber: (state, action) => {
      state.num = action.payload
    }
  },
});

export const { increment, decrement, setNumber } = counterSlice.actions; //setter
export default counterSlice.reducer; //getter