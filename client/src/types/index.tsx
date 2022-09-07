import { ProductDocument } from '../../../api/src/models/Product'
import * as actions from '../redux/actions/types'

export type ActionTypes =
  | { type: typeof actions.ADD_TO_CART; payload: CartItem }
  | { type: typeof actions.REMOVE_FROM_CART; payload: string }
  | { type: typeof actions.FETCH_PRODUCTS_REQUEST }
  | { type: typeof actions.FETCH_PRODUCTS_SUCCESS; payload: ProductDocument[] }
  | { type: typeof actions.FETCH_PRODUCTS_FAILURE; payload: string }
  | { type: typeof actions.FETCH_PRODUCT_REQUEST }
  | { type: typeof actions.FETCH_PRODUCT_SUCCESS; payload: ProductDocument }
  | { type: typeof actions.FETCH_PRODUCT_FAILURE; payload: string }
  | { type: typeof actions.FETCH_BESTSELLERS_REQUEST }
  | {
      type: typeof actions.FETCH_BESTSELLERS_SUCCESS
      payload: ProductDocument[]
    }
  | { type: typeof actions.FETCH_BESTSELLERS_FAILURE; payload: string }
  | { type: typeof actions.INCREASE_QUANTITY }
  | { type: typeof actions.DECREASE_QUANTITY }
  | { type: typeof actions.OPEN_CART }
  | { type: typeof actions.CLOSE_CART }
  | { type: typeof actions.INCREASE_CART_ITEM_QUANTITY; payload: string }
  | { type: typeof actions.DECREASE_CART_ITEM_QUANTITY; payload: string }
  | { type: typeof actions.CART_RESET }
  | { type: typeof actions.USER_LOGIN; payload: User }

export type ShippingAddress = {
  name: string
  address: string
  city: string
  postalCode: number
  country: string
}

export type Order = {
  userId: string
  orderItems: ProductDocument[]
  shippingAddress: ShippingAddress
  paymentMethod: string
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt: string
  isDelivered: boolean
  deliveredAt: string
}

export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
  image: string
  isAdmin: boolean
  isBanned: boolean
  orders: Order[]
}

export type UserInfo = {
  data: Partial<User>
  isLoggedIn: boolean
}

export type Quantity = {
  quantity: number
}

export type CartItem = {
  _id: string
  name: string
  image: string
  price: number
  qty: number
}
export type Cart = {
  cartItems: CartItem[]
  totalPrice: number
  showCart: boolean
  totalQuantities: number
}

export type Product = {
  data: Partial<ProductDocument>
  loading: boolean
  error: null | string
}

export type Products = {
  data: ProductDocument[]
  loading: boolean
  error: null | string
}

export type BestSellers = {
  data: ProductDocument[]
  loading: boolean
  error: null | string
}

export type State = {
  products: Products
  product: Product
  bestsellers: BestSellers
  cart: Cart
  quantity: Quantity
  searchTerm: {
    keyword: string
  }
  user: UserInfo
}
