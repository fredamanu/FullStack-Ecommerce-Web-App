import * as actions from '../actions/types'
import { ActionTypes, BestSellers } from '../../types'

const initialState: BestSellers = {
  data: [],
  loading: false,
  error: null,
}

export const bestsellers = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.FETCH_BESTSELLERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actions.FETCH_BESTSELLERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case actions.FETCH_BESTSELLERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
