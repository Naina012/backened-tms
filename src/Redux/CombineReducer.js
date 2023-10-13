import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../Store/Slices/userSlice";

const rootReducer = combineReducers({
  userSlice,
});
export default rootReducer;
