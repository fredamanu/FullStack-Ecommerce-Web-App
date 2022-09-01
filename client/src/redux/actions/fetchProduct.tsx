import * as actions from './types'
import axios from 'axios'
import { ProductDocument } from '../../../../api/src/models/Product'

export const fetchProductRequest = () => ({
  type: actions.FETCH_PRODUCT_REQUEST,
})

export const fetchProductSuccess = (data: ProductDocument) => ({
  type: actions.FETCH_PRODUCT_SUCCESS,
  payload: data,
})

export const fetchProductFailure = (err: string) => ({
  type: actions.FETCH_PRODUCT_FAILURE,
  payload: err,
})

export const fetchProduct = (productId: string) => {
  return function (dispatch: any) {
    dispatch(fetchProductRequest())
    axios
      .get(`http://localhost:5000/api/v1/products/${productId}`)
      .then((response) => {
        dispatch(fetchProductSuccess(response.data))
      })
      .catch(function (error) {
        dispatch(fetchProductFailure(error.message))
      })
  }
}
