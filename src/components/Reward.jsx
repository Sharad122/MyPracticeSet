"use client";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increment} from "../reducers/reward"

const Reward = () => {

  const dispatch = useDispatch()
  const reward = useSelector(state=>state.reward.points);

  return (
    <div className="flex flex-col items-center gap-6 py-9 border">
    <h2 className='text-lg text-gray-800'>Reward Componet</h2>
    <div className='text-xl text-red-600'>Total Ponits : {reward}</div>
    <div className='flex items-center gap-6'>
      <button onClick={()=>dispatch(increment())} className='px-2 py-1 bg-black text-white'>Increment +</button>
    </div>
  </div>
  )
}

export default Reward
