import { createSlice } from "@reduxjs/toolkit";

export interface IBillSlice {
  bill: any;
}

const initialState: IBillSlice = {
  bill: [],
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    getBills() {},
    getBillsSuccess(state, action) {
      state.bill = action.payload;
    },
  },
});
export const { getBills, getBillsSuccess } = billSlice.actions;

const billReducers = billSlice.reducer;
export default billReducers;
