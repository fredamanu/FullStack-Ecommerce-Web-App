import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types'
import AddressPopper from '../AddressPopper/AddressPopper'

import './OrderContent.css'

const OrderContent = () => {
 const orders = useSelector((state: State) => state.orders.data)
 let url: string

 return (
  <div className="main-order-wrapper">
   <div className="order-title-container">
    <h3>My Orders</h3>
   </div>
   {orders.map((order) => {
    return (
     <div key={order._id} className="orders">
      <div className="orders-table">
       <div className="table-heading-flex">
        <div className="table-heading-right-flex">
         <div>
          <p>Order Placed</p>
          <p>{order.createdAt.slice(0, 10)}</p>
         </div>
         <div>
          <p>Total</p>
          <p>€ {order.totalAmount / 100}</p>
         </div>
         <div>
          <p>Dispatched To</p>
          <AddressPopper shippingAddress={order.shippingAddress}/>
         </div>
        </div>
        <div>
         <p>Order ID</p>
         <p>{order._id}</p>
        </div>
       </div>
       <div className="order-table-body">
        <p>Items in your Order</p>
        <ul>
         {order.orderItems.map((item, index) => {
          url = `/products/${item.name}`
          return (
           <li key={index}>
            <span>{item.qty}</span>
            <span>{item.qty > 1 ? 'pieces' : 'piece'}.</span>
            <span>
             <a href={url}>{item.name}</a>
            </span>
           </li>
          )
         })}
        </ul>
       </div>
      </div>
     </div>
    )
   })}
  </div>
 )
}

export default OrderContent
