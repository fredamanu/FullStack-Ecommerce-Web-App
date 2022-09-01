import { ActionTypes, Quantity } from '../../types'
import * as actions from '../actions/types'

const initialState: Quantity = {
  quantity: 1,
}

export const quantity = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.INCREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1,
      }

    case actions.DECREASE_QUANTITY:
      if (state.quantity - 1 < 1) {
        return {
          ...state,
          quantity: 1,
        }
      }
      return {
        ...state,
        quantity: state.quantity - 1,
      }
    default:
      return state
  }
}
