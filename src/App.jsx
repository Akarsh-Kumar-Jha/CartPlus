import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import AboutUs from './pages/AboutUs'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Category from './components/Category'
import Cart from './pages/Cart'

function App() {

  const [isLoggedIn,setisLoggedIn] = useState(false);

  const location = useLocation();
  return (
    <div className={`w-[100vw] ${location.pathname == "/cart" || location.pathname == "/login" || location.pathname == "/sign" ? 'bg-white' : 'bg-[#F4F5F7]'} overflow-hidden`}>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>



      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>}></Route>
        <Route path="/sign" element={<Signup setisLoggedIn={setisLoggedIn}/>}></Route>
        <Route path="/category/:id" element={<Category/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>




  )
}

export default App