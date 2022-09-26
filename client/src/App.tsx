import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Order from './pages/Order'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'
import Shop from './pages/Shop'
import Success from './pages/Success'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:productName" element={<ProductDetails />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
