import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import { NavLink } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import UsefetchData from '../Hooks/UsefetchData';

function Shop() {

  const {loading,data} = UsefetchData("https://raw.githubusercontent.com/Akarsh-Kumar-Jha/Products-Data/refs/heads/main/Products-data.json");
  const CategoriesValues = [
{name:"Electronics",image:"https://images.squarespace-cdn.com/content/v1/5ae8bd2f89c1723a6f6f557b/1565794679412-QOSVO1NO2JF104SBAU4R/AdobeStock_237119664.jpeg"},
{name:"Home Appliances",image:"https://th.bing.com/th/id/OIP.hlP7xakVxNYUO2HWWY5itQAAAA?rs=1&pid=ImgDetMain"},
{name:"Fashion",image:"https://www.deekaydental.com/wp-content/uploads/2021/07/invisalign-in-sheffield.jpg"},
{name:"Fitness",image:"https://th.bing.com/th/id/OIP.5TMmYi1CctYBawB_h94kUwHaE7?rs=1&pid=ImgDetMain"},
{name:"Books",image:"https://img.freepik.com/free-photo/pnga-stack-books-isolated-white-background_185193-164139.jpg?size=626&ext=jpg&ga=GA1.1.1633054541.1695419442&semt=ais_hybrid"},
{name:"Wearables",image:"https://earifin.com/public/uploads/all/8zPmnjY24YzE0khjW288J9GPkL5yKTfY3LHsdEkq.jpg"},
{name:"Gaming",image:"https://m.media-amazon.com/images/I/61sQfdCLGZL._SL1373_.jpg"},
{name:"Toys & Games",image:"https://st2.depositphotos.com/3266441/6264/i/450/depositphotos_62647709-stock-illustration-mickey-mouse-action-figure-from.jpg"},

  ];

  const [items,setItems] = useState([]);
useEffect(() => { 
  const RandomProduts = () => {
    let filtered_Data = [];
if(data.length>0)
{
  while(filtered_Data.length < 40){
    let randomId = Math.floor(Math.random()*40) + 1;
    let matched_Item = data.find((item) => item.id == randomId);
    if(matched_Item && !filtered_Data.includes(matched_Item)){
      filtered_Data.push(matched_Item);
    }
  }
  setItems(filtered_Data)
} 
  };

  RandomProduts();
},[data])
  return (
    <div className='max-w-screen-xl mx-auto bg-[#F4F5F7] w-[90vw]'>
      <div className='mt-2 h-full w-full max-w-screen-xl'>
        <h1 className='text-left md:text-2xl text-[3vw] mb-4 mt-5 font-semibold'>Shop by Categories</h1>

        {/* Shop By Categories Section */}
        <div className='mt-4 grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-3'>
         {
         CategoriesValues.map((item,index) => {
            return <NavLink to={`/category/${item.name}`}> 
              <Categories key={index} name={item.name} image={item.image}/>  
              </NavLink>
          })
         }
        </div>




        <div className='mt-8 w-full'>
<h1 className='md:text-2xl text-[3vw] text-left font-semibold'>All Products</h1>
<div>
  {
      <div className='mt-5 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-3 justify-stretch'>

  
      {
         loading?
         ( <Spinner/> ): (
          items.map((item,index) => {
         return <div>
          <Card key={item.id} data={item}/> 
           </div>}  ) )
      }
      </div>
  }
</div>
        </div>

      </div>
    </div>
  )
}

export default Shop