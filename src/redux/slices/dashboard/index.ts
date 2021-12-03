import { createSlice } from "@reduxjs/toolkit";

export interface IDashboardSlice {
  dashboard: any;
}

const initialState: IDashboardSlice = {
  dashboard: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getDashboards() {},
    getDashboardsSuccess(state, action) {
      state.dashboard = action.payload;
    },
  },
});
export const { getDashboards, getDashboardsSuccess } = dashboardSlice.actions;

const dashboardReducers = dashboardSlice.reducer;
export default dashboardReducers;
