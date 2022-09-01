import * as actions from './types'
import axios from 'axios'
import { ProductDocument } from '../../../../api/src/models/Product'

export const fetchProductsRequest = () => ({
  type: actions.FETCH_PRODUCTS_REQUEST,
})

export const fetchProductsSuccess = (data: ProductDocument[]) => ({
  type: actions.FETCH_PRODUCTS_SUCCESS,
  payload: data,
})

export const fetchProductsFailure = (err: string) => ({
  type: actions.FETCH_PRODUCTS_FAILURE,
  payload: err,
})

export const fetchProducts = () => {
  return function (dispatch: any) {
    dispatch(fetchProductsRequest())
    axios
      .get('http://localhost:5000/api/v1/products')
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data))
      })
      .catch(function (error) {
        dispatch(fetchProductsFailure(error.message))
      })
  }
}
