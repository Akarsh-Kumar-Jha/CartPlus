import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm({setisLoggedIn}) {

    const navigate = useNavigate()
    const [formData,setformData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        cpassword:""
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
if(formData.password != formData.cpassword){
    toast.error('Passwords do not match.');
    return;
}
console.log(formData);
toast.success('Successfully created!');
setisLoggedIn(true)
navigate("/")
    }
  return (
    <form className='h-[90%] md:w-[80%] w-[90%] rounded-md md:bg-white flex flex-col justify-center items-center gap-8' onSubmit={handleSubmit}>
        <label className='w-[400px] text-right text-[18px]' >First Name<sup>*</sup>
<input required  className=' ml-5 rounded-md p-2 border border-sky-300' type="text"
placeholder='Enter your first name' 
onChange={handleChange}
value={formData.firstname}
name='firstname'/>
        </label>

        <label className='w-[400px] text-right text-[18px]'>Last Name<sup>*</sup>
<input required className=' ml-5 rounded-md p-2 border border-sky-300' type="text"
placeholder='Enter your Last name' 
onChange={handleChange}
value={formData.lastname}
name='lastname'/>
        </label>

        <label className='w-[400px] text-right text-[18px]'>Enter email<sup>*</sup>
<input required className=' ml-5 rounded-md p-2 border border-sky-300' type="email"
placeholder='Enter Email' 
onChange={handleChange}
value={formData.email}
name='email'/>
        </label>

        <label className='w-[400px] text-right text-[18px]'>Enter Password<sup>*</sup>
<input required className=' ml-5 rounded-md p-2 border border-sky-300' type="text"
placeholder='Create a password' 
onChange={handleChange}
value={formData.password}
name='password'/>
        </label>

        
        <label className='w-[400px] text-right text-[18px]'>Confirm Password<sup>*</sup>
<input required className=' ml-5 rounded-md p-2 border border-sky-300' type="text"
placeholder='Re-enter your password' 
onChange={handleChange}
value={formData.cpassword}
name='cpassword'/>
        </label>

        <button className='px-3 py-1 bg-sky-400 rounded-md text-white hover:bg-sky-500'>Create Account</button>
    </form>
  )
}

export default SignupForm