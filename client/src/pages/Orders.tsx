import React from 'react'
import { Footer, Navigation, OrderContent } from '../components'
import { useParams } from 'react-router-dom'
import { useOrders } from '../hooks/fectchData'

export default function Orders() {
  const userId = useParams().userId as string

  useOrders(userId)

  return (
    <div>
      <Navigation/>
      <OrderContent/>
      <Footer/>
    </div>
  )
}
