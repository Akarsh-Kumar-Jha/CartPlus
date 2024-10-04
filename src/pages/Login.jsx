import React from 'react'
import Template from '../components/Template'

function Login({setisLoggedIn}) {
  return (
    <div className='max-w-screen-xl mx-auto w-[90vw] h-[100vh]'>


    <div className='flex md:flex-row flex-col-reverse md:justify-between justify-center items-center w-[100%] max-w-screen-xl mx-auto flex-1'>
        <Template className="md:w-[80%] w-[100%]" setisLoggedIn={setisLoggedIn} tittle="Log In to Your Account"
         subtittle="Welcome back! Please enter your email and password to continue."
        FormType="Login"/>
        <div className='md:w-[90%] md:mt-0 mt-5 md:mb-0 mb-8 w-[80vw]'>
<img className='w-[100%]' src="https://github.com/Akarsh-Kumar-Jha/Products-Data/blob/main/Login&Signup/6300830.jpg?raw=true" alt="jhhhh" loading='lazy'/>
        </div>
    </div>

    </div>
  )
}

export default Login