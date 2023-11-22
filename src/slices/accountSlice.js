import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 0,
};

export const getUserAccount = createAsyncThunk(
  'account/getUser',
  async (userId, thunkAPI) => {
    const {data} = await axios.get(`http://localhost:8000/accounts/${userId}`)
    return data.amount
  }
)

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    decrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
    incrementByAmount: (state, action) => {
      state.amount -= action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(getUserAccount.pending,(state,action)=>{
      state.pending = true
    })
    builder.addCase(getUserAccount.fulfilled,(state,action)=>{
      state.amount = action.payload
      state.pending = false
    })
    builder.addCase(getUserAccount.rejected,(state,action)=>{
      state.error = action.error
    })
  }
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
