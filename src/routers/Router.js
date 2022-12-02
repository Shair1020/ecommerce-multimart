import React from 'react'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import { Route, Routes } from 'react-router-dom';


const Router = () => {
  return <Routes>
    <Route path='home' element={<Home/>} />
    <Route path='login' element={<Login />} />
    <Route path='shop' element={<Shop />} />
    <Route path='shop/:id' element={<ProductDetails />} />
    <Route path='cart' element={<Cart />} />
    <Route path='signup' element={<Signup />} />
    <Route path='checkout' element={<Checkout />} />
  </Routes>
}

export default Router