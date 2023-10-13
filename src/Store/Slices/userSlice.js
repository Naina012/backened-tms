import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    accountStatus:"",
  },

  reducers: {
    OtpToken: (state, action) => {
      if (action?.payload) {
        state.token = action.payload;
      } else {
        // console.log("not found");
      }
    },
    Logout: (state, action) => {
      if (action?.payload === "null") {
        state.token = null;
      }
    },
    AccountStatus: (state, action) => {
      if (action?.payload) {
        state.accountStatus = action.payload;
      }
    },
  },
});
// console.log(userSlice)

export const { OtpToken, Logout, AccountStatus } = userSlice.actions;
export default userSlice.reducer;