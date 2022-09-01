import { User } from '../../types'
import * as actions from './types'

export const userLogin = (user: Partial<User>) => {
  return {
    type: actions.USER_LOGIN,
    payload: user,
  }
}
