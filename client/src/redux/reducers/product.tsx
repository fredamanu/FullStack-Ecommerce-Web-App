import * as actions from '../actions/types'
import { ActionTypes, Product } from '../../types'

const initialState: Product = {
  data: {},
  loading: false,
  error: null,
}

export const product = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actions.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case actions.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
