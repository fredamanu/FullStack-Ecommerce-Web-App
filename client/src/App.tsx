import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import ProductDetails from './pages/ProductDetails'
import SignUp from './pages/SignUp'
import Shop from './pages/Shop'
import SuccessPage from './pages/SuccessPage'
import Account from './pages/Account'
import Orders from './pages/Orders'
import './App.css'

function App() {
 return (
  <div className="App">
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/products/:productName" element={<ProductDetails />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/success" element={<SuccessPage />} />
    <Route path="/account/:userId" element={<Account />} />
    <Route path="/orders/:userId" element={<Orders />} />
   </Routes>
  </div>
 )
}

export default App
