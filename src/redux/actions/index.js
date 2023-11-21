import axios from "axios";

// Actions Name
export const inc = "account/increment";
export const dec = "account/decrement";
export const incByAmt = "account/incrementByAmount";
export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulFilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";
export const incBonus = "bonus/increment";

// Action Creator
export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:8000/accounts/${id}`);
      dispatch(getAccountUserFulFilled(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.massage));
    }
  };
}

export function Increment() {
  return { type: inc };
}
export function Decrement() {
  return { type: dec };
}
export function IncrementByAmount(value) {
  return { type: incByAmt, payload: value };
}
export function IncrementBonus() {
  return { type: incBonus };
}
export function getAccountUserPending() {
  return { type: getAccUserPending, payload: true };
}
export function getAccountUserFulFilled(value) {
  return { type: getAccUserFulFilled, payload: value };
}
export function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error };
}
