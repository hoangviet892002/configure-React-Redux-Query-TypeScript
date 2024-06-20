import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user.type";

interface AuthState {
  user: User | null;
  token: string | null;
}
const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
