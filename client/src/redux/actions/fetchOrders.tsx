import * as actions from './types'
import axios from 'axios'
import { OrderDocument } from '../../types'

export const fetchOrdersRequest = () => ({
  type: actions.FETCH_ORDERS_REQUEST,
})

export const fetchOrdersSuccess = (data: OrderDocument[]) => ({
  type: actions.FETCH_ORDERS_SUCCESS,
  payload: data,
})

export const fetchOrdersFailure = (err: string) => ({
  type: actions.FETCH_ORDERS_FAILURE,
  payload: err,
})

export const fetchOrders = (userId: string) => {
  return function (dispatch: any) {
    dispatch(fetchOrdersRequest())
    axios
      .get(`http://localhost:5000/api/v1/orders/${userId}`,)
      .then((response) => {     
        dispatch(fetchOrdersSuccess(response.data))
      })
      .catch(function (error) {
        dispatch(fetchOrdersFailure(error.message))
      })
  }
}
