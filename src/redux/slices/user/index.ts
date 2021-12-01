import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@redux/types/user";

interface IUserSlice {
  user: IUser;
}

const initialState: IUserSlice = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser() {},
    getUserSuccess(state, action) {
      state.user = action.payload;
    },
  },
});

export const { getUser, getUserSuccess } = userSlice.actions;

const userReducers = userSlice.reducer;
export default userReducers;
