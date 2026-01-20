import { configureStore } from "@reduxjs/toolkit";
import investorReducer from "./investorSlice";
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    investor: investorReducer,
    auth: authReducer,
  },
});

export default store;