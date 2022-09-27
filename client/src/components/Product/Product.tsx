import React from 'react'
import { Link } from 'react-router-dom'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarIcon from '@mui/icons-material/Star'

import { ProductDocument } from '../../../../api/src/models/Product'
import './Product.css'

type Props = {
  product: ProductDocument
}

const Product: React.FC<Props> = ({
  product: { name, image, price, _id, isBestSeller },
}) => {
  const url = `/products/${name}`
  return (
    <div className="product-flex-container">
      <Link to={url} className="product-flex">
        <div className="section-one">
          <div>
            <img src={image} alt={name} />
            {isBestSeller && (
              <div className="bestseller-tag" style={{ float: 'right' }}>
                best seller
              </div>
            )}
          </div>

          <p className="product-name" id="product-name">
            {name}
          </p>
          <p className="product-price">€ {price} EUR</p>
          <div className="star-icon-container">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarOutlineOutlinedIcon />
            <p style={{ display: 'inline-block' }}>127</p>
          </div>
        </div>
      </Link>
      <div className="add-to-cart-btn">add to cart</div>
    </div>
  )
}

export default Product
