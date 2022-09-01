import React from 'react'
import { Link } from 'react-router-dom'
import { ProductDocument } from '../../../api/src/models/Product'

type Props = {
  product: ProductDocument
}

const Product: React.FC<Props> = ({ product: { name, image, price, _id } }) => {
  const url = `/products/${name}`
  return (
    <div>
      <Link to={url}>
        {/* <a href={url}> */}
        <div className="product-card">
          <img
            src={image}
            alt="product"
            width={
              name === 'shampoo' ||
              name === 'conditioner' ||
              name === 'oil' ||
              name === 'leave in'
                ? 250
                : 270
            }
            height={
              name === 'shampoo' ||
              name === 'conditioner' ||
              name === 'oil' ||
              name === 'leave in'
                ? 290
                : 280
            }
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">NOK{price}</p>
        </div>
      </Link>
      {/* </a> */}
    </div>
  )
}

export default Product
