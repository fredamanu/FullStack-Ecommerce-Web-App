import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import ProductDetail from '../components/ProductDetail'
import { useProduct, useProducts } from '../hooks/fectchData'
import { State } from '../types'

export default function ProductDetails() {
  const prod = useParams()
  const productName = prod.productName as string
  const product = useSelector((state: State) => state.product.data)
  const products = useSelector((state: State) => state.products.data)
  useProduct(productName)
  useProducts()

  return (
    <div>
      <Navbar />
      <ProductDetail
        product={product && product}
        products={products && products}
      />
      <Footer />
    </div>
  )
}
