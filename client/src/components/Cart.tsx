import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { State } from '../types'
import {
  closeCart,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeFromCart,
} from '../redux/actions/cart'
import getStripe from '../stripe/getStripe'

export default function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const { totalQuantities, cartItems, totalPrice } = useSelector(
    (state: State) => state.cart
  )
  const { isLoggedIn } = useSelector((state: State) => state.user)

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  const handleIncreaseCartItemQty = (_id: string) => {
    dispatch(increaseCartItemQuantity(_id))
  }

  const handleDecreaseCartItemQty = (_id: string) => {
    dispatch(decreaseCartItemQuantity(_id))
  }

  const handleRemoveItemFromCart = (_id: string) => {
    dispatch(removeFromCart(_id))
  }

  const handleCheckout = async () => {
    if (isLoggedIn === true) {
      const stripe = await getStripe()
      await axios
        .post('http://localhost:5000/api/v1/payments', {
          items: cartItems,
        })
        .then((response) => {
          const data = response.data
          toast.loading('Redirecting...')
          stripe.redirectToCheckout({ sessionId: data.id })
        })
        .catch((err) => {
          console.log(err.message)
        })
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={handleCloseCart}
        >
          <NavigateBeforeOutlinedIcon />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <LocalMallOutlinedIcon sx={{ fontSize: '150px' }} />
            <h3>Your shopping cart is empty</h3>
            <a href="/">
              <button type="button" className="btn">
                Continue Shopping
              </button>
            </a>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <div className="product" key={item._id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-product-image"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>NOK{item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() => {
                              handleDecreaseCartItemQty(item._id)
                            }}
                          >
                            <RemoveOutlinedIcon />
                          </span>
                          <span className="num">{item.qty}</span>
                          <span
                            className="plus"
                            onClick={() => {
                              handleIncreaseCartItemQty(item._id)
                            }}
                          >
                            <AddOutlinedIcon />
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => {
                          handleRemoveItemFromCart(item._id)
                        }}
                      >
                        <HighlightOffOutlinedIcon />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>NOK{totalPrice.toFixed(2)}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                CheckOut
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
