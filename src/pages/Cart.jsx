import React, { useEffect, useState } from 'react'
import BoxCart from '../components/BoxCart'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addItemsFromStorage} from '../Redux/Cartslice'
import {removeFromCart,changeQuantity} from '../Redux/Cartslice'
import toast from 'react-hot-toast';

function Cart() {
  const totalPrice = useSelector((state) => state.Cart.Totalprice);
  const Cart_items = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch()
  console.log("Dekho to Cart Items in Cartt.js.js");
  console.log(Cart_items);
const navigate = useNavigate();
useEffect(() => {
  if(Cart_items && Cart_items.length>0){
    localStorage.setItem("Items",JSON.stringify(Cart_items));
  }
},[Cart_items]);

useEffect(() => {
let AddedItems = JSON.parse(localStorage.getItem("Items"));
if(AddedItems && AddedItems.length>0){
  dispatch(addItemsFromStorage(AddedItems));
}
},[]);

const removeHandler = (id) => {
  dispatch(removeFromCart(id))
}


const QuantityHandler = (id,quantity) => {
  if(quantity<1){
    toast.error("Quantity must be one");
    return;
  }
  dispatch(changeQuantity({qid:id,qnt:quantity}))
}

  return (
    <div className='bg-white w-full min-h-[92vh]'>
        <div className='max-w-screen-xl mx-auto w-[95vw]'>
            <h1 className='text-left text-gray-500 md:text-4xl text-[8vw] mt-6 font-light'>Items in My Cart</h1>

         {   Cart_items.length>0 ? ( <div className='flex flex-col gap-y-2 items-center justify-center'>

           
{/* Tittle Wala */}
            <div className=' md:p-4 p-2 flex w-full justify-between items-center text-gray-400 mt-10 md:text-xl text-[3vw] font-normal'>
<h4 className='w-2/5'>ITEMS</h4>
<h4 className='w-1/5'>UNIT PRICE</h4>
<h4 className='w-1/5'>QUANTITY</h4>
<h4 className='w-1/5'>PRICE</h4>
            </div>

            {/* Asli Cart  */}
            <div className='w-full flex flex-col gap-y-4'>

              {
                Cart_items.map((item,index) => {
                  console.log("item hai",item)
                  return item ? (<BoxCart item={item} removeHandler={removeHandler} QuantityHandler={QuantityHandler} key={index}/>) : null;
                })
              }

              <div className='mt-10 mb-10 mx-auto'> 
                <button className='px-3 py-2 bg-sky-400 rounded-lg shadow-lg text-white w-[150px] hover:bg-sky-500 font-bold md:text-xl text-[5vw]'>Pay ₹{totalPrice}</button>
                </div>
            </div>

            </div>

           ) : (
            <div className='w-full h-full flex justify-center items-center mt-5'> 
            <div className='bg-zinc-500 rounded-lg p-5 md:w-[600px] w-[80vw] md:h-[200px] h-[30vh] flex flex-col gap-y-4 justify-center items-center'>
              <h1 className='md:text-2xl text-[4vw] font-semibold text-gray-800'>Looks like you haven't added any items yet.</h1>
              <button onClick={() => navigate("/shop")} className='px-3 mt-5 py-2 bg-sky-400 rounded-lg text-white font-semibold'>Add Items</button>
            </div>
            </div>
            )

          }

        </div>
    </div>
  )
}

export default Cart