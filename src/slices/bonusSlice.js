import { createAction, createSlice } from "@reduxjs/toolkit";

const incrementByAmount = createAction('account/incrementByAmount')

const initialState = {
  points: 0,
};

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points ++;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(incrementByAmount,(state,action)=>{
      if(action.payload >= 100){
        state.points+=1
      }
    })
  }
});

export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
