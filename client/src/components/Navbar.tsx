import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'
import { State } from '../types'
import Cart from './Cart'
import { openCart } from '../redux/actions/cart'

export default function Navbar() {
  const dispatch = useDispatch<any>()
  const { showCart, totalQuantities } = useSelector(
    (state: State) => state.cart
  )
  const handleOpenCart = () => {
    dispatch(openCart())
  }

  return (
    <div className="navbar-container">
      <p className="logo">
        <a href="/">NC HairCare</a>
      </p>
      <div className="navlinks-container">
        <p className="navlink">SHOP</p>
        <p className="navlink">REVIEWS</p>
        <p className="navlink">FAQ</p>
        <p className="navlink">CONTACT</p>
        <p className="navlink">LOGIN</p>
        <button type="button" className="cart-icon" onClick={handleOpenCart}>
          <ShoppingBasketOutlinedIcon />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
    </div>
  )
}
