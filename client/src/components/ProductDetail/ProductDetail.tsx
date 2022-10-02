import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarIcon from '@mui/icons-material/Star'

import Product from '../Product/Product'
import { ProductDocument } from '../../../../api/src/models/Product'
import { State } from '../../types'
import {
  decreaseQuantity,
  increaseQuantity,
} from '../../redux/actions/quantity'
import { addToCart, openCart } from '../../redux/actions/cart'
import './ProductDetail.css'
import ProductDetailTabs from './ProductDetailTabs'
import { Reviews } from '../../components'
import { width } from '@mui/system'

type Props = {
  product: Partial<ProductDocument>
  products: ProductDocument[]
}

const ProductDetail: React.FC<Props> = ({ product, products }) => {
  const dispatch = useDispatch<any>()
  const quantity = useSelector((state: State) => state.quantity.quantity)

  const increaseQuanity = () => {
    dispatch(increaseQuantity())
  }
  const decreaseQuanity = () => {
    dispatch(decreaseQuantity())
  }

  const addProductToCart = () => {
    const cartItem = {
      _id: product._id as string,
      name: product.name as string,
      image: product.image as string,
      price: product.price as number,
      qty: quantity as number,
    }

    dispatch(addToCart(cartItem))
  }

  const handleBuyNow = () => {
    addProductToCart()
    dispatch(openCart())
  }

  return (
    <div>
      <div id="main-container">
        <div className="product-detail">
          <div
            style={{ width: '100%', display: 'flex', gap: 20 }}
            className="new-flex-container"
          >
            <div
              style={{
                width: '40%',
                height: 750,

                // backgroundColor: 'yellow',
              }}
              className="flex-one"
            >
              <div
                style={{
                  width: '85%',
                  minWidth: 350,
                  // backgroundColor: 'red',
                  margin: '0 auto',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',

                    objectFit: 'contain',
                    margin: '20px auto 0',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                width: '60%',
                height: 750,
                // backgroundColor: 'white',
              }}
              className="flex-two"
            >
              <h1>{product.name}</h1>
              <div className="reviews">
                <div>
                  <StarOutlineOutlinedIcon />
                  <StarOutlineOutlinedIcon />
                  <StarOutlineOutlinedIcon />
                  <StarOutlineOutlinedIcon />
                  <StarOutlineOutlinedIcon />
                </div>
                <p>(0)</p>
              </div>
              <ProductDetailTabs product={product} />
              <p className="price">€ {product.price} EUR</p>
              <div className="quantity">
                <h3>Quantity:</h3>
                <p className="quantity-desc">
                  <span className="minus" onClick={decreaseQuanity}>
                    <RemoveOutlinedIcon />
                  </span>
                  <span className="num">{quantity}</span>
                  <span className="plus" onClick={increaseQuanity}>
                    <AddOutlinedIcon />
                  </span>
                </p>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="add-to-cart"
                  onClick={addProductToCart}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="buy-now"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* <div className="product-detail-container">
          <div className="flex1">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="small-images-container">
              <img
                src={product.image}
                className="small-image "
                alt={product.name}
              />
            </div>
          </div>
          <div className="product-detail-desc">
            <h1>{product.name}</h1>
            <div className="reviews">
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarOutlineOutlinedIcon />
              </div>
              <p>(20)</p>
            </div>
            <ProductDetailTabs product={product} />
            <p className="price">NOK{product.price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decreaseQuanity}>
                  <RemoveOutlinedIcon />
                </span>
                <span className="num">{quantity}</span>
                <span className="plus" onClick={increaseQuanity}>
                  <AddOutlinedIcon />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="add-to-cart"
                onClick={addProductToCart}
              >
                Add to Cart
              </button>
              <button type="button" className="buy-now" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div> */}
          <Reviews />
        </div>
      </div>
      {/* <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ProductDetail
