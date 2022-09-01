import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BannerDocument } from '../../../api/src/models/Banner'
import { fetchProducts } from '../redux/actions/fetchProducts'
import { fetchProduct } from '../redux/actions/fetchProduct'
import { fetchBestSellers } from '../redux/actions/fetchBestSellers'

export function useBanner(url: string) {
  const [bannerData, setBannerData] = useState<null | BannerDocument[]>(null)
  const [bannerError, setBannerError] = useState<null | string>(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBannerData(data))
      .catch((err) => setBannerError(err))
  }, [url])

  return { bannerData, bannerError }
}

export function useProducts() {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
}

export function useProduct(productId: string) {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [dispatch, productId])
}

export function useBestSellers() {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchBestSellers())
  }, [dispatch])
}
