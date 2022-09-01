import { CartItem } from '../../types'
import * as actions from './types'

export const addToCart = (payload: CartItem) => {
  return {
    type: actions.ADD_TO_CART,
    payload: payload,
  }
}

export const removeFromCart = (_id: string) => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: _id,
  }
}

export const openCart = () => {
  return { type: actions.OPEN_CART }
}

export const closeCart = () => {
  return { type: actions.CLOSE_CART }
}

export const increaseCartItemQuantity = (_id: string) => {
  return { type: actions.INCREASE_CART_ITEM_QUANTITY, payload: _id }
}

export const decreaseCartItemQuantity = (_id: string) => {
  return { type: actions.DECREASE_CART_ITEM_QUANTITY, payload: _id }
}

export const cartReset = () => {
  return { type: actions.CART_RESET }
}
