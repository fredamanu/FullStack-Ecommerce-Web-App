import React from 'react'
import { useSelector } from 'react-redux'
import { useBestSellers } from '../../hooks/fectchData'
import { State } from '../../types'
import MotionWrapper from '../../Wrapper/MotionWrapper'
import Product from '../Product/Product'

const BestSellers = () => {
  const state = useSelector((state: State) => state)
  const bestSellers = state.bestsellers.data

  useBestSellers()

  return (
    <section id="bestselling-products">
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Conditioners of many variation</p>
      </div>
      <div className="products-container">
        {bestSellers?.map((bestSeller) => (
          <Product product={bestSeller} key={bestSeller._id} />
        ))}
      </div>
    </section>
  )
}

export default MotionWrapper(BestSellers)
