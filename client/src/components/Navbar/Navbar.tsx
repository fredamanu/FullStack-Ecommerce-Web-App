import React, { useState } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import Avatar from '@mui/material/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'

import { images } from '../../assets'
import { State } from '../../types'
import Cart from '../Cart'
import { openCart } from '../../redux/actions/cart'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'

export default function Navbar() {
  const [color, setColor] = useState(false)
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

  const handleChangeColor = () => {
    if (window.scrollY >= 250) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', handleChangeColor)

  return (
    <nav className={color ? 'app-navbar-scroll' : 'app-navbar'}>
      <div className="logo-container">
        <a href="/">
          <img src={images.logo} alt="logo" className="navbar-logo" />
        </a>
      </div>
      <ul className="nav-links">
        {['home', 'about', 'shop', 'bestsellers', 'contact'].map(
          (item, index) => (
            <li key={item + index} className="flex">
              <div />
              <a href={item === 'home' ? `/` : `/${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <div className="sigin-container">
        {isLoggedIn ? (
          <Avatar>{fullName}</Avatar>
        ) : (
          <a href="/signin">
            <p>
              <span>
                <PersonOutlineIcon />
              </span>
              Login
            </p>
          </a>
        )}
      </div>
      <div className="cart-icon-container">
        <button type="button" className="cart-icon" onClick={handleOpenCart}>
          <ShoppingBasketOutlinedIcon />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </nav>
  )
}
