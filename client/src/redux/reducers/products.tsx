import * as actions from '../actions/types'
import { ActionTypes, Products } from '../../types'

const initialState: Products = {
  data: [],
  loading: false,
  error: null,
}

export const products = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case actions.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
