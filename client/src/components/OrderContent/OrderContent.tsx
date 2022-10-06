import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useOrders } from '../../hooks/fectchData'
import { State } from '../../types'

import './OrderContent.css'

const OrderContent = () => {
const orders = useSelector((state: State)=> state.orders.data)


 return (
  <div className='orders-table'>
   <div className='table-heading-flex'>
    <div className='table-heading-right-flex'>
     <div>
      <p>Order Placed</p>
      <p>12 Oct 2022</p>
     </div>
     <div>
      <p>Total</p>
      <p>€ 25 EUR</p>
     </div>
     <div>
      <p>Dispatched To</p>
      <p>Freda Manu</p>
     </div>
    </div>
    <div>
        <p>Order ID</p>
        <p>gsjjasywgwgjjksjys</p>
    </div>
   </div>
  </div>
 )
}

export default OrderContent
