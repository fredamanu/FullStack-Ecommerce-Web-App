import * as actions from '../actions/types'
import { ActionTypes, Orders } from '../../types'

const initialState: Orders = {
  data: [],
  loading: false,
  error: null,
}

export const orders = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.FETCH_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actions.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case actions.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
