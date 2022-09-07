import * as actions from './types'
import axios from 'axios'
import { ProductDocument } from '../../../../api/src/models/Product'

export const fetchBestSellersRequest = () => ({
  type: actions.FETCH_BESTSELLERS_REQUEST,
})

export const fetchBestSellersSuccess = (data: ProductDocument[]) => ({
  type: actions.FETCH_BESTSELLERS_SUCCESS,
  payload: data,
})

export const fetchBestSellersFailure = (err: string) => ({
  type: actions.FETCH_BESTSELLERS_FAILURE,
  payload: err,
})

export const fetchBestSellers = () => {
  return function (dispatch: any) {
    dispatch(fetchBestSellersRequest())
    axios
      .get(`http://localhost:5000/api/v1/products/bestsellers`)
      .then((response) => {
        dispatch(fetchBestSellersSuccess(response.data))
      })
      .catch(function (error) {
        dispatch(fetchBestSellersFailure(error.message))
      })
  }
}
