import React from 'react'
import Avatar from '@mui/material/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'
import { State } from '../types'
import Cart from './Cart'
import { openCart } from '../redux/actions/cart'

export default function Navbar() {
  const dispatch = useDispatch<any>()
  const state = useSelector((state: State) => state)
  const showCart = state.cart.showCart
  const totalQuantities = state.cart.totalQuantities
  const isLoggedIn = state.user.isLoggedIn
  const firstName = state.user.data.firstName
  const lastName = state.user.data.lastName
  const name = firstName?.slice(0, 1) as string
  const name2 = lastName?.slice(0, 1) as string
  const fullName = name?.concat(name2)

  const handleOpenCart = () => {
    dispatch(openCart())
  }

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <a href="/">
          <img
            src="https://res.cloudinary.com/defgcg7hn/image/upload/v1662208154/banner/c_d45cof.png"
            width="100px"
            alt="logo"
          />
        </a>
      </div>
      <div className="nav-container">
        <div className="navlinks-container">
          <a className="navlink" href="/shop">
            SHOP
          </a>
          <a className="navlink" href="/contact">
            CONTACT
          </a>
          <a className="navlink" href="/login">
            {isLoggedIn ? <Avatar>{fullName}</Avatar> : 'SIGN IN'}
          </a>
        </div>
        <div className="cart-icon-container">
          <button type="button" className="cart-icon" onClick={handleOpenCart}>
            <ShoppingBasketOutlinedIcon />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
      </div>
      {showCart && <Cart />}
    </nav>
  )
}
