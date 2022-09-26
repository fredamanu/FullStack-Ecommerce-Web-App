import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarIcon from '@mui/icons-material/Star'
import Product from './Product/Product'
import { ProductDocument } from '../../../api/src/models/Product'

import { State } from '../types'
import { decreaseQuantity, increaseQuantity } from '../redux/actions/quantity'
import { addToCart, openCart } from '../redux/actions/cart'

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
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={product.image}
              alt={product.name}
              width={400}
              height={
                product.name === 'shampoo' ||
                product.name === 'conditioner' ||
                product.name === 'oil' ||
                product.name === 'leave in'
                  ? 500
                  : 400
              }
              className="product-detail-img"
            />
          </div>
          {/* <div></div> */}
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
          <h4>Details:</h4>
          <p>{product.benefits}.</p>
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
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
