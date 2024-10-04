import React from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

function Navbar({isLoggedIn,setisLoggedIn}) {


    const navigate = useNavigate()

    function outhandler(){
        setisLoggedIn(false);
        navigate("/")
        toast.success("Logged Out")
    }
    const navItems = [
        {name:"Home",path:"/"},
        {name:"Shop",path:"/shop"},
        {name:"About Us",path:"/about"},
    ]

  return (
<nav className=' max-w-screen-xl mx-auto h-[8vh] justify-between flex items-center border-b-[1px] border-zinc-400 w-[90vw]'>

    <NavLink to="/">

    <div className="text-[#3C3D37] md:text-[25px] text-2vw cursor-pointer select-none">Cart<span className='text-[#A1D6B2]'>Plus</span></div>

    </NavLink>
<div  className="flex justify-center items-center md:gap-14 gap-[3vw]">

    
        {
            navItems.map((elem,index)=>{
                return <NavLink style={(e)=>{
                    return{
                        color:e.isActive?"#4F75FF":"",
                        fontWeight:e.isActive?"500" :"",
                    }
                }} className="ml-2 md:text-[1.2vw] text-[2.4vw]" key={index} to={elem.path}>{elem.name}</NavLink>
            })
        }

        
    </div>
<div className="flex justify-center items-center md:gap-8 gap-[2vw]">
    
{
            !isLoggedIn&&<NavLink to="/login"><button className='bg-[#919EAB] md:px-3 md:py-1 px-[0.8vw] py-1 text-[2vw] md:text-[1rem] text- rounded text-white  hover:bg-[#919EBC]'>Log In</button></NavLink>
        }
            {
            !isLoggedIn&&<NavLink to="/sign"><button className='bg-[#919EAB] md:px-3 md:py-1 px-[0.8vw] py-1 text-[2vw] md:text-[1rem] text- rounded text-white  hover:bg-[#919EBC]'>Sign Up</button></NavLink>
        }
            {
            isLoggedIn&&<button onClick={outhandler} className='bg-red-400 md:px-3 md:py-1 px-[0.8vw] py-1 text-[1rem] md:text-xl rounded text-white  hover:bg-red-500'>Log Out</button>
        }

<IoCartOutline onClick={()=> navigate("/cart")} className='md:text-3xl text-[5vw] cursor-pointer hover:opacity-70 text-black' />
</div>

</nav>
  )
}

export default Navbar