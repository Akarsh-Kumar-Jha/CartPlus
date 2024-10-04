import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState  = {
items:[],
totalQuantity:0,
Totalprice:0,
};

export const Cartslice = createSlice({
name:"Cart",
initialState ,
reducers:{
  addItemtoCart(state,action){
    console.log("Action dispatched: ", action);
   const newItem = action.payload;
   if (!action.payload) {
    console.error("Received an undefined payload in addItemtoCart");
    return;
  }
   const existingItem = state.items.find((item) => item.id == newItem.id);
   if(!existingItem){
    state.items.push({
      id:newItem.id,
      name:newItem.name,
      price:newItem.price,
      image:newItem.image,
      desc:newItem.desc,
      totalPrice:newItem.price,
      category:newItem.category,
      quantity:1,
    })
    toast.success("Item Added");
    state.Totalprice += newItem.price;
   }
   else{
    toast.success("Already Added");
  }
  },
  addItemsFromStorage(state,action){
    state.items = action.payload;
    state.Totalprice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
  },
  removeFromCart(state,action){
    const id = action.payload;
    const removingElement =  state.items.find((item) => id == item.id)
    if(state.items && state.items.length>0){
state.items = state.items.filter((item) => item.id != id);
toast.success("Item Removed From Cart")
state.Totalprice -= removingElement.totalPrice;
    }
  },
  changeQuantity(state,action){
const {qid,qnt} = action.payload
   const existingItem = state.items.find((item) => item.id == qid)
   if(existingItem){
   let prevPrice = existingItem.totalPrice
    existingItem.quantity = qnt;
    existingItem.totalPrice = qnt * existingItem.price
    state.Totalprice += existingItem.totalPrice - prevPrice
   }
  },
}
});

export const { addItemtoCart,addItemsFromStorage,removeFromCart,changeQuantity } = Cartslice.actions;
export default Cartslice.reducer;