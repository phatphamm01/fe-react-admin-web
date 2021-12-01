import { combineReducers } from "@reduxjs/toolkit";
import commonReducers from "./common";
import productReducers from "./product";
import themeReducers from "./theme";
import userReducers from "./user";

const rootReducers = combineReducers({
  themeReducers,
  commonReducers,
  productReducers,
  userReducers,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
