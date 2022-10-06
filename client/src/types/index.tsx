import * as actions from '../redux/actions/types'

export type ActionTypes =
 | { type: typeof actions.ADD_TO_CART; payload: CartItem }
 | { type: typeof actions.REMOVE_FROM_CART; payload: string }
 | { type: typeof actions.FETCH_PRODUCTS_REQUEST }
 | { type: typeof actions.FETCH_PRODUCTS_SUCCESS; payload: ProductDocument[] }
 | { type: typeof actions.FETCH_PRODUCTS_FAILURE; payload: string }
 | { type: typeof actions.FETCH_ORDERS_REQUEST }
 | { type: typeof actions.FETCH_ORDERS_SUCCESS; payload: OrderDocument[] }
 | { type: typeof actions.FETCH_ORDERS_FAILURE; payload: string }
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
 | { type: typeof actions.RESET_QUANTITY }
 | { type: typeof actions.OPEN_CART }
 | { type: typeof actions.CLOSE_CART }
 | { type: typeof actions.INCREASE_CART_ITEM_QUANTITY; payload: string }
 | { type: typeof actions.DECREASE_CART_ITEM_QUANTITY; payload: string }
 | { type: typeof actions.CART_RESET }
 | { type: typeof actions.USER_LOGIN; payload: User }
 | { type: typeof actions.USER_LOGOUT }


export type ReviewDocument = {
  name: string
  rating: number
  titleOfReview: string
  comment: string
  user: string
}

export type ProductDocument = {
  _id:string
  name: string
  image: string
  benefits: string
  ingredients: string
  suggestedUse: string
  disclosure: string
  isBestSeller: boolean
  tags: string[]
  reviews: ReviewDocument[]
  rating: number
  numOfReviews: number
  price: number
  size: number
  countInStock: number
}

export type Products = {
  data: ProductDocument[]
  loading: boolean
  error: null | string
 }

 export type Product = {
  data: Partial<ProductDocument>
  loading: boolean
  error: null | string
 }

 export type BestSellers = {
  data: ProductDocument[]
  loading: boolean
  error: null | string
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
 export type Quantity = {
  quantity: number
 }
 

export type ShippingAddress = {
 name: string
 addressLine1: string
 addressLine2: string
 city: string
 postalCode: number
 country: string
}

export type OrderItem = {
 _id: string
 name: string
 image: string
 price: number
 qty: number
}

export type OrderDocument = {
 userId: string
 customerId: string
 paymentIntentId: string
 orderItems: OrderItem[]
 shippingAddress: ShippingAddress
 paymentMethod: string
 taxPrice: number
 shippingPrice: number
 shippingRate: string
 totalAmount: number
 paymentStatus: string
 isDelivered: boolean
 deliveredAt: string
}

export type Orders = {
  data: OrderDocument[]
  loading: boolean
  error: null | string
}

export type User = {
 _id: string
 firstName: string
 lastName: string
 email: string
 password: string
 image: string
 isAdmin: boolean
 isBanned: boolean
 orders: String[]
}

export type UserInfo = {
 data: Partial<User> | null
}



export type State = {
 products: Products
 product: Product
 bestsellers: BestSellers
 cart: Cart
 quantity: Quantity
 orders: Orders
 user: UserInfo
}
