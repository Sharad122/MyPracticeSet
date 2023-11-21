"use client";
import { accountReducer } from "@/redux/reducers/account";
import { bonusReducer } from "@/redux/reducers/bonus";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    accounts: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(thunk, logger)
);

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
