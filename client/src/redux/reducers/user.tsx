import { ActionTypes, UserInfo } from '../../types'
import * as actions from '../actions/types'

const initialState: UserInfo = {
  data: {},
  isLoggedIn: false,
}

export const user = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        data: action.payload,
        isLoggedIn: true,
      }
    default:
      return state
  }
}
