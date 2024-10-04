import React from 'react'
import { useDispatch } from 'react-redux';
import {addItemtoCart} from '../Redux/Cartslice'
import toast from 'react-hot-toast';
import { useRef } from 'react';

function Card({data}) {

  const dispatch = useDispatch();
  const ref = useRef();

  const addCartHandler = () => {
   const Data_Sent = {
      id:data.id,
      image:data.image,
      name:data.name,
      desc:data.description,
      price:data.price,
      category:data.category,
    };
    console.log("Dispatching action with data: ", Data_Sent);
    dispatch(addItemtoCart(Data_Sent));
    ref.current.style.backgroundColor = `green`;
    ref.current.innerText = `Added`
  }
  return (
    <div className='md:p-4 p-2  rounded-xl shadow-md hover:shadow-lg ease-in-out border-gray-200 border-1 duration-300 bg-white md:h-[350px] h-[25vh] max-h-[400px] overflow-hidden flex flex-col items-center justify-center hover:scale-105
        transition-all
         gap-y-4'>
<div className='px-4 py-4 md:h-[60%] h-[50%] w-full flex justify-center items-center'>
  <img className='h-full object-cover' src={data.image} alt="" />
</div>
<h2 className='md:text-xl text-[3vw] font-semibold uppercase tracking-wide'>{data.name}</h2>
<p className='text-gray-400 md:text-lg text-[1.9vw]'>{data.description}</p>
<div className="flex w-full justify-between items-center mb-3 px-4">
<p className='text-gray-800 font-bold md:text-xl text-[2.5vw]'>₹{data.price}</p>
<button ref={ref} onClick={addCartHandler} className='md:px-3 mb-2 md:py-1 px-2 py-[0.4vh] rounded-lg bg-[#8B74FE] md:text-sm text-[2vw] text-white font-medium hover:bg-purple-500 transition-all duration-300 ease-in-out'>Add</button>
</div>
      </div>
  )
}

export default Card