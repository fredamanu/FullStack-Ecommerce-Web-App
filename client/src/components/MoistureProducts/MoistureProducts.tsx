import React from 'react'
import { useSelector } from 'react-redux'

import { State } from '../../types'
import MotionWrapper from '../../Wrapper/MotionWrapper'
import Product from '../Product/Product'

const MoistureProducts = () => {
  const state = useSelector((state: State) => state)
  const products = state.products.data
  const moistureProducts = products.filter((product) =>
    product.tags.includes('Moisture')
  )
  return (
    <section id="moisture-products">
      <div className="products-heading">
        <h2>Shop Our Moisture Boosting Line of Products</h2>
      </div>
      <div className="products-container">
        {moistureProducts?.map((bestSeller) => (
          <Product product={bestSeller} key={bestSeller._id} />
        ))}
      </div>
    </section>
  )
}

export default MotionWrapper(MoistureProducts)
