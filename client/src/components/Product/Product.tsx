import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarIcon from '@mui/icons-material/Star'

import { ProductDocument } from '../../types'
import './Product.css'
import { addToCart } from '../../redux/actions/cart'
import { State } from '../../types'
import { resetQuantity } from '../../redux/actions/quantity'

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
    dispatch(resetQuantity())
  }
  return (
    <div
      style={{ width: 250, height: 400, margin: '0 auto', textAlign: 'center' }}
    >
      <a href={url}>
        <div style={{ width: 250, height: 250, margin: '0 auto' }}>
          <img
            src={image}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <p style={{ textTransform: 'none' }}>{name}</p>
        <p>€ {price} EUR</p>
        <div className="star-icon-container">
          <StarOutlineOutlinedIcon />
          <StarOutlineOutlinedIcon />
          <StarOutlineOutlinedIcon />
          <StarOutlineOutlinedIcon />
          <StarOutlineOutlinedIcon />
          <p style={{ display: 'inline-block' }}>(0)</p>
        </div>
        
      </a>
      <div className="add-to-cart-btn" onClick={handleAddToCart}>
          add to cart
        </div>
    </div>
    
  )
}

export default Product
