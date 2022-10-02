import { ActionTypes, UserInfo } from '../../types'
import * as actions from '../actions/types'

const initialState: UserInfo = {
  data: null,
}

export const user = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      localStorage.setItem('user', JSON.stringify({ ...action?.payload }))
   
      return {
        ...state,
        data: action.payload,
        
      }
      case actions.USER_LOGOUT:
      localStorage.clear()
      return {
        ...state,
        data: null,
       
      }
    default:
      return state
  }
}
