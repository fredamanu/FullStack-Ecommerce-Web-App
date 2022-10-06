import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/fetchProducts'
import { fetchProduct } from '../redux/actions/fetchProduct'
import { fetchBestSellers } from '../redux/actions/fetchBestSellers'
import { fetchOrders } from '../redux/actions/fetchOrders'

export function useProducts() {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
}

export function useProduct(productName: string) {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchProduct(productName))
  }, [dispatch, productName])
}

export function useBestSellers() {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchBestSellers())
  }, [dispatch])
}

export function useOrders(userId:string) {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchOrders(userId))
  }, [dispatch])
}