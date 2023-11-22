"use client";
import rewardReducer from "@/reducers/reward";
import accountReducer from "../slices/accountSlice";
import bonusReducer from "../slices/bonusSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward:rewardReducer
  },
});

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
