import { configureStore, createStore } from "@reduxjs/toolkit";
import { authSlice } from "../slice/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { languagesSlice } from "../slice/languagesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    language: languagesSlice.reducer,
  },
});
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
