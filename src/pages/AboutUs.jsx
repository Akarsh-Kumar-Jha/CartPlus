import React from 'react'

function AboutUs() {
  return (

    <div className='w-[100vw] bg-gradient-to-b from-[#F4F5F7] to-[#E8EBF0] md:h-[92vh]'>
    <div className='max-w-screen-xl mx-auto overflow-hidden w-[90vw]'>
      <h1 className='text-center font-semibold md:text-2xl text-[5vw] mt-6'>About CartPlus</h1>
      <p className='text-left text-lg mt-6 leading-relaxed'>CartPlus is a fictional e-commerce platform developed as a front-end project. This website
         simulates a real-world shopping experience, offering a variety of products across
          electronics, fashion, home decor, and more categories.</p>

          <h1 className='text-left font-semibold md:text-2xl text-[5vw] mt-6'>Project Mission</h1>
      <p className='text-left text-lg mt-6 leading-relaxed'>The goal of CartPlus is to demonstrate a user-friendly
         interface, responsive design, and seamless navigation, showcasing key elements of an e-commerce website using modern web technologies.</p>

         <h1 className='text-left font-semibold md:text-2xl text-[5vw] mt-6'>Who Developed It?</h1>
      <p className='text-left text-lg mt-6 leading-relaxed'>CartPlus is developed by Akarsh Kumar, a front-end developer passionate about creating intuitive and responsive web applications.
         This project serves as a demonstration of skills in React.js, modern web design, and e-commerce functionality.
          You can view more of Akarsh's work and contact for collaborations at <a target='_blank' className='text-blue-600 underline' href="https://akarshjha.netlify.app/">Akarsh Kumar</a>.</p>
    </div>

    </div>
  )
}

export default AboutUs