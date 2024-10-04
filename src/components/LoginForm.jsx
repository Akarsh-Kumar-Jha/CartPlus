import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LoginForm({setisLoggedIn}) {

    const navigate = useNavigate()


        const [formData,setformData] = useState({
            email:"",
            password:"",
        })
    
        function handleChange(event){
            setformData(prevdata => {
                return {
                   ...prevdata,
                   [event.target.name]:event.target.value
                }
            })
        }
    
        function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
    toast.success('Successfully Logged In');
    setisLoggedIn(true)
    navigate("/")
        }


  return (
    <div>
    <form className='h-[90%] md:w-[80%] w-[90%] rounded-md bg-white flex flex-col justify-center items-center gap-8' onSubmit={handleSubmit}>


        <label className='w-[400px] text-right text-[18px]'>Email Address<sup>*</sup>
<input required className=' ml-5 rounded-md p-2 border border-sky-300' type="text"
placeholder='Enter Email' 
onChange={handleChange}
value={formData.email}
name='email'/>
        </label>

        <label className='w-[400px] text-right text-[18px]'>Password<sup>*</sup>
<input required className=' ml-5 rounded-md p-2 border border-sky-300' type="text"
placeholder='Enter Your password' 
onChange={handleChange}
value={formData.password}
name='password'/>
        </label>


        <button className='px-3 py-1 bg-sky-400 rounded-md text-white hover:bg-sky-500'>Log In</button>
    </form>





    </div>
  )
}

export default LoginForm