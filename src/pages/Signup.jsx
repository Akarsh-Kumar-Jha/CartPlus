import React from 'react'
import Template from '../components/Template'

function Signup({setisLoggedIn}) {
  return (
    <div className='max-w-screen-xl mx-auto w-[90vw] h-[100vh]'>


    <div className='flex md:flex-row flex-col-reverse md:justify-between justify-center items-center w-[100%] max-w-screen-xl mx-auto flex-1'>
            <Template className="md:w-[80%] w-[100%]" setisLoggedIn={setisLoggedIn} tittle="Create a New Account"
         subtittle="Sign up to start shopping with us!"
        FormType="Signup"/>

        <div className='md:w-[90%] md:mt-0 mt-5 md:mb-0 mb-8 w-[80vw]'>
          <img src="https://github.com/Akarsh-Kumar-Jha/Products-Data/blob/main/Login&Signup/Account-amico.jpg?raw=true" alt="" loading='lazy'/>
        </div>
    </div>
    </div>
  )
}

export default Signup