import { combineReducers } from 'redux'

import { products } from './products'
import { product } from './product'
import { bestsellers } from './bestsellers'
import { quantity } from './quanity'
import { cart } from './cart'
import { user } from './user'
import {orders} from "./orders"

const rootReducer = combineReducers({
  products,
  product,
  bestsellers,
  quantity,
  cart,
  user,
  orders,
})

export default rootReducer
