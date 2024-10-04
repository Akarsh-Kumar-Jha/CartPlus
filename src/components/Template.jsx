import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Template({tittle,subtittle,FormType,setisLoggedIn}) {
  return (
    <div className='md:h-[100vh] w-[100%] text-center flex flex-col items-center justify-center gap-5'>
<div>
<h1 className='md:text-2xl text-[4vw] text-black font-semibold'>{tittle}</h1>
<p>{subtittle}</p>
</div>

<div className={` ${FormType=="Login"?"md:mt-6 mt-4":"md:mt-10"}`}>


{
    FormType=="Login" ? (<LoginForm setisLoggedIn={setisLoggedIn}/>):(<SignupForm setisLoggedIn={setisLoggedIn}/>)
}

</div>


    </div>
  )
}

export default Template