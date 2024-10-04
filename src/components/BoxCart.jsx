import React from 'react'
import { CiCircleRemove } from "react-icons/ci";

function BoxCart({item,removeHandler,QuantityHandler}) {
  if (!item) {
    return
  }
  console.log("Printing item.id in Boxcart.jsx");
  console.log(item.id);
  return (
    <div className=' bg-white md:h-[10vh] h-[20vh] flex w-full justify-between items-center text-gray-400 mt-10 md:text-xl text-[3vw] font-normal border-b-2 border-zinc-400 py-8'>
<div className='flex items-center md:gap-x-4 gap-x-2 w-2/5 md:px-2 px-1 py-3'>
<img className='md:w-16 w-[6vw] md:h-[55px] h-[80%] max-h-[90%] mb-2' src={item.image} alt="" />


<div>
<h2 className='md:font-semibold font-normal text-black'>{item.name}</h2>
<h3 className='md:text-sm text-[3vw] text-green-500 opacity-80'>{item.category}</h3>
</div>
</div>

<p className='w-1/5 md:text-lg text-[3.5vw] font-medium text-zinc-700'>₹{item.price}</p>

<div className='w-1/5'>
<input value={item.quantity} onChange={(event) => QuantityHandler(item.id,event.target.value)} className='md:w-12 h-5 w-[6vw] border border-gray-300 rounded-md outline-none px-2 py-5' type="number" min={1}/>
</div>

<h2 className='w-1/5 md:text-lg text-[3.5vw] font-semibold text-zinc-700'>₹{item.totalPrice}</h2>

<div>
<CiCircleRemove onClick={() => removeHandler(item.id)} className='text-2xl text-red-500 font-bold hover:text-red-800 cursor-pointer'/>
</div>
    </div>
  )
}

export default BoxCart