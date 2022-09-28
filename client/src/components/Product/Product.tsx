import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarIcon from '@mui/icons-material/Star'

import { ProductDocument } from '../../../../api/src/models/Product'
import './Product.css'
import { addToCart } from '../../redux/actions/cart'
import { State } from '../../types'

type Props = {
  product: ProductDocument
}

const Product: React.FC<Props> = ({
  product: { name, image, price, _id, isBestSeller },
}) => {
  const dispatch = useDispatch<any>()
  const quantity = useSelector((state: State) => state.quantity.quantity)
  const url = `/products/${name}`
  const handleAddToCart = () => {
    const cartItem = {
      _id: _id as string,
      name: name as string,
      image: image as string,
      price: price as number,
      qty: quantity as number,
    }

    dispatch(addToCart(cartItem))
  }
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
      <div className="add-to-cart-btn" onClick={handleAddToCart}>
        add to cart
      </div>
    </div>
  )
}

export default Product
