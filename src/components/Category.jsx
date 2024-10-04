import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UsefetchData from '../Hooks/UsefetchData';
import Categories from './Categories';
import Card from './Card';
import Spinner from './Spinner';

function Category() {
    const {id} = useParams();
    const[filteredData,setfilteredData] = useState([])
    const {loading,data} = UsefetchData("https://raw.githubusercontent.com/Akarsh-Kumar-Jha/Products-Data/refs/heads/main/Products-data.json");
 console.log(data);
 useEffect(() => {
    if(data) {
        const filteredItems = data.filter((item) => {
            return item.category === id;
         })
         setfilteredData(filteredItems);
    }
 },[data])



  return (
    <div className="max-w-screen-xl h-auto mx-auto text-center overflow-x-hidden bg-[#F4F5F7]">
        <h1 className='text-2xl text-left mt-5 font-semibold'>{id}</h1>
    <div className='mt-5 grid grid-cols-3 gap-4 justify-stretch overflow-hidden'>

  
    {
       loading?
       ( <Spinner/> ): (
        filteredData.map((item,index) => {
       return <div>
        <Card key={item.id} data={item}/> 
         </div>}  ) )
    }
    </div>
    </div>
  )
}

export default Category