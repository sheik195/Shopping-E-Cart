import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Cart from './component/Cart'
import TabSwitch from './component/TabSwitch'
import AdminLogin from './component/Admin/AdminLogin'
import Login from './component/Login'
import Signup from './component/Signup'
import AdminControl from './component/Admin/AdminControl'
import Order from './customer/Order'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './component/Product'
import Product1 from './component/Product1'
import Tosted from './component/Tosted'
import Myorder from './customer/Myorder'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/tosted" element={<Tosted />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tabswitch" element={<TabSwitch />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin"  element={<AdminControl />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />


          <Route path="/myorder" element={<Myorder />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
