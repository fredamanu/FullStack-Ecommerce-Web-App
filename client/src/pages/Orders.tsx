import React, { useEffect } from 'react'
import axios from 'axios'
import { OrderContent } from '../components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../types'
import { useOrders } from '../hooks/fectchData'

export default function Orders() {
  const userId = useParams().userId as string

  useOrders(userId)

  return (
    <div>
      <OrderContent/>
    </div>
  )
}
