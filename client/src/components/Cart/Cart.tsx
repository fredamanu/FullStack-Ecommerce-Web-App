import React from 'react'
import Divider from '@mui/material/Divider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { State } from '../../types'
import {
  closeCart,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeFromCart,
} from '../../redux/actions/cart'
import getStripe from '../../stripe/getStripe'
import './Cart.css'

export default function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const { totalQuantities, cartItems, totalPrice } = useSelector(
    (state: State) => state.cart
  )
  // const user = useSelector((state: State) => state.user?.data)
    // @ts-ignore:next-line
  const user = JSON.parse(localStorage.getItem("user"))

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
    if (user) {
      const stripe = await getStripe()
      await axios
        .post('http://localhost:5000/api/v1/stripe', {
          items: cartItems,
          user,
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
      navigate('/signin')
    }
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <div role="button" className="cart-heading" onClick={handleCloseCart}>
          <NavigateBeforeOutlinedIcon />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </div>
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
                <div key={item._id}>
                  <div className="product" >
                    <div style={{ width: 180, height: 150, marginTop: -30 }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-product-image"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>

                    <div className="item-desc">
                      <div className="">
                        <h5 style={{ fontSize: 16 }}>{item.name}</h5>
                        <h4 style={{ fontSize: 16 }}>€ {item.price} EUR</h4>
                      </div>
                      <div className="">
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
                      </div>
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
                  <Divider style={{ background: 'gray' }} />
                </div>
              )
            })}
          <Divider />
          <div style={{ marginTop: 50 }}>
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>€{totalPrice.toFixed(2)}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                CheckOut
              </button>
            </div>
          </div>
        </div>

        {/* {cartItems.length >= 1 && (
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
        )} */}
      </div>
    </div>
  )
}
