import { ActionTypes, Cart, CartItem } from '../../types'
import * as actions from '../actions/types'
import { toast } from 'react-hot-toast'

const initialState: Cart = {
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  showCart: false,
}

export const cart = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const isInCart = state.cartItems.some((item) => {
        return item._id === action.payload._id
      })
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id)
          return {
            ...cartItem,
            qty: cartItem.qty + action.payload.qty,
          }
        return {
          ...cartItem,
        }
      })
      if (isInCart) {
        toast.success(
          `${action.payload.qty} ${action.payload.name} added to cart`,
          {
            icon: '👏',
            position: "bottom-left"
          }
        )
        return {
          ...state,
          totalPrice:
            state.totalPrice + action.payload.price * action.payload.qty,
          totalQuantities: state.totalQuantities + action.payload.qty,
          cartItems: updatedCartItems,
        }
      }
      toast.success(
        `${action.payload.qty} ${action.payload.name} added to cart`,
        {
          icon: '👏',
          position: "bottom-left"
        }
      )
      return {
        ...state,
        totalPrice:
          state.totalPrice + action.payload.price * action.payload.qty,
        totalQuantities: state.totalQuantities + action.payload.qty,
        cartItems: [action.payload, ...state.cartItems],
      }

    case actions.OPEN_CART:
      return {
        ...state,
        showCart: true,
      }

    case actions.CLOSE_CART:
      return {
        ...state,
        showCart: false,
      }

    case actions.INCREASE_CART_ITEM_QUANTITY:
      const foundProduct = state.cartItems.find(
        (item) => item._id === action.payload
      ) as CartItem

      const newCart = state.cartItems.filter(
        (item) => item._id !== action.payload
      )

      return {
        ...state,
        cartItems: [{ ...foundProduct, qty: foundProduct.qty + 1 }, ...newCart],

        totalPrice: state.totalPrice + foundProduct.price,
        totalQuantities: state.totalQuantities + 1,
      }
    case actions.DECREASE_CART_ITEM_QUANTITY:
      const foundProductToDecrease = state.cartItems.find(
        (item) => item._id === action.payload
      ) as CartItem

      const newCart2 = state.cartItems.filter(
        (item) => item._id !== action.payload
      )
      if (foundProductToDecrease.qty > 1) {
        return {
          ...state,
          cartItems: [
            { ...foundProductToDecrease, qty: foundProductToDecrease.qty - 1 },
            ...newCart2,
          ],

          totalPrice: state.totalPrice - foundProductToDecrease.price,
          totalQuantities: state.totalQuantities - 1,
        }
      }
      return {
        ...state,
        cartItems: [{ ...foundProductToDecrease, qty: 1 }, ...newCart2],
      }

    case actions.REMOVE_FROM_CART:
      const foundProductToRemove = state.cartItems.find(
        (item) => item._id === action.payload
      ) as CartItem

      const newCartItems3 = state.cartItems.filter(
        (item) => item._id !== action.payload
      )
      toast.success(
        `${foundProductToRemove.qty} ${foundProductToRemove.name} removed from cart`,
        {
          icon: '😔',
          position: "bottom-left"
        }
      )
      return {
        ...state,
        cartItems: [...newCartItems3],
        totalPrice:
          state.totalPrice -
          foundProductToRemove.price * foundProductToRemove.qty,
        totalQuantities: state.totalQuantities - foundProductToRemove.qty,
      }

    case actions.CART_RESET:
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
        totalQuantities: 0,
        showCart: false,
      }

    default:
      return state
  }
}
