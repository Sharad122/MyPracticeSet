"use client";
import React, { useState } from 'react';
import { increment, decrement,incrementByAmount, decrementByAmount, getUserAccount } from '@/slices/accountSlice';
import { useDispatch, useSelector } from 'react-redux';

const Account = () => {

  const [value, setValue] = useState(0)
  const dispatch = useDispatch();
  const amount = useSelector(state=>state.account.amount);


  return (
    <div className="flex flex-col items-center gap-6 my-3 py-9 border">
      <h2 className='text-lg text-gray-800'>Account Componet</h2>
      <div className='text-xl text-red-600'>Amount : ${amount}</div>
      <div className='flex items-center gap-6'>
        <button onClick={()=>dispatch(increment())} className='px-2 py-1 bg-black text-white'>Increment +</button>
        <input type="text" className='w-24 p-1 border border-sky-500' onChange={(e)=>setValue(+e.target.value)}/>
        <button onClick={()=>dispatch(decrement())} className='px-2 py-1 bg-black text-white'>Decrement -</button>
        <button onClick={()=>dispatch(incrementByAmount(value))} className='px-2 py-1 bg-black text-white'>Increment + By Value</button>
        <button onClick={()=>dispatch(decrementByAmount(value))} className='px-2 py-1 bg-black text-white'>Decrement - By Value</button>
        <button onClick={()=>dispatch(getUserAccount(1))} className='px-2 py-1 bg-black text-white'>Init Account</button>
      </div>
    </div>
  )
}

export default Account
