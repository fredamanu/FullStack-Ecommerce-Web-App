import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import Order from './pages/Order'
import ProductDetails from './pages/ProductDetails'
import SignUp from './pages/SignUp'
import Shop from './pages/Shop'
import Success from './pages/Success'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:productName" element={<ProductDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
