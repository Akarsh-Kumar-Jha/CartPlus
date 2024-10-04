import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination,Autoplay  } from 'swiper/modules';
import { NavLink, useNavigate } from 'react-router-dom';
import UsefetchData from '../Hooks/UsefetchData';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

function Home() {


const {loading,data} = UsefetchData("https://raw.githubusercontent.com/Akarsh-Kumar-Jha/Products-Data/refs/heads/main/Products-data.json");
const [items,setItems] = useState([])
useEffect(() => { 
  const RandomProduts = () => {
    let filtered_Data = [];
if(data.length>0)
{
  while(filtered_Data.length < 9){
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

 
  const navigate = useNavigate()
  function handleSlide(){
    navigate("/shop");
  }
  return (
    <div className='max-w-screen-xl h-auto mx-auto text-center overflow-x-hidden bg-[#F4F5F7] w-[90vw]'>
<h1 className='md:text-2xl text-[3vw] text-zinc-600 font-semibold mt-5 font-serif'>Discover Amazing Deals on Your Favorite Products!</h1>

<Swiper
 modules={[Pagination, Navigation,Autoplay]}
  spaceBetween={50}
  slidesPerView={1}
  navigation={true}
  pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    autoplay={{delay:3000,disableOnInteraction:false}}
  onSlideChange={() => console.log('slide change')}
  className='mt-10 rounded-md cursor-pointer'
  lazy={true}
    >
      <SwiperSlide>
        <div onClick={handleSlide} className="w-full md:h-[55vh] h-[30vh]">
          <img className="h-full w-full object-fit" src="https://github.com/Akarsh-Kumar-Jha/Products-Data/blob/main/Swipper%20images/Black%20Yellow%20Bold%20Bag%20Fashion%20Sale%20Banner%20(1)%20(1).jpg?raw=true" alt="slide image" loading='lazy' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div onClick={handleSlide} className="w-full md:h-[55vh] h-[30vh]">
      <img className="h-full w-full object-fit" src="https://github.com/Akarsh-Kumar-Jha/Products-Data/blob/main/Swipper%20images/Black%20Yellow%20Bold%20Bag%20Fashion%20Sale%20Banner%20(2)%20(1).jpg?raw=true" alt="slide image" loading='lazy' />
      </div>
      </SwiperSlide>
      <SwiperSlide> <div onClick={handleSlide} className="w-full md:h-[55vh] h-[30vh]">
      <img className="h-full w-full object-fit" src="https://github.com/Akarsh-Kumar-Jha/Products-Data/blob/main/Swipper%20images/Black%20Yellow%20Bold%20Bag%20Fashion%20Sale%20Banner%20(3)%20(1)%20(1).jpg?raw=true" alt="slide image" loading='lazy' />
      </div>
      </SwiperSlide>
      <SwiperSlide> <div onClick={handleSlide} className="w-full md:h-[55vh] h-[30vh]">
      <img className="h-full w-full object-fit" src="https://github.com/Akarsh-Kumar-Jha/Products-Data/blob/main/Swipper%20images/Black%20Yellow%20Bold%20Bag%20Fashion%20Sale%20Banner%20(4).jpg?raw=true" alt="slide image" loading='lazy' />
      </div>
      </SwiperSlide>
      ...
    </Swiper>

    <div className="mt-8 flex flex-col gap-y-[20px] max-w-screen-xl mx-auto bg-[#F4F5F7]">
      <h1 className='md:text-2xl text-[3vw] text-zinc-700 font-bold text-left'>Our Top Picks for You</h1>
     <div className="max-w-screen-xl mx-auto w-[90vw]">
     <div className='grid md:grid-cols-3 md:gap-4 grid-cols-2 gap-3 justify-stretch'>

{
loading ? (
<Spinner/>
) : (

items? items.map((item) => (

  <Card key={item.id} data={item} />
)):(
  <Spinner/>
)
)

}
</div>

</div>

     </div>
     <NavLink to="/shop">
     <button className='bg-zinc-500 text-white rounded-lg mb-5 mt-4 px-3 py-2'>Explore More..</button>
     </NavLink>
    </div>
  )
}

export default Home