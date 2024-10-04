import React from 'react'

function Categories({name,image}) {
  return (
    <div className='md:h-[250px] h-[35vh] w-full rounded-lg text-center shadow-lg hover:scale-105 overflow-hidden transition-transform duration-300 relative cursor-pointer group'
    style={{ backgroundImage: `url(${image})`, backgroundPosition:'center' , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-25 transition-opacity duration-300"></div>
       <h1 className='text-2xl group-hover:text-3xl relative top-[70%] font-semibold text-white z-10 group-hover:top-[65%] transition-transform duration-400'> {name}</h1>
    </div>
  )
}

export default Categories