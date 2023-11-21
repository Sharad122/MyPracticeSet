"use client";
import { IncrementBonus } from '@/redux/actions';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Bonus = () => {

  const dispatch = useDispatch()
  const bonus = useSelector(state=>state.bonus.points);

  return (
    <div className="flex flex-col items-center gap-6 py-9 border">
    <h2 className='text-lg text-gray-800'>Bonus Componet</h2>
    <div className='text-xl text-red-600'>Total Ponits : {bonus}</div>
    <div className='flex items-center gap-6'>
      <button onClick={()=>dispatch(IncrementBonus())} className='px-2 py-1 bg-black text-white'>Increment +</button>
    </div>
  </div>
  )
}

export default Bonus
