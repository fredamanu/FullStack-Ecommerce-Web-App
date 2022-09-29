import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar'
import MenuIcon from '@mui/icons-material/Menu'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'

import { images } from '../../assets'
import { State } from '../../types'
import { openCart } from '../../redux/actions/cart'
import Cart from '../Cart'

const MobileNavbar = () => {
  const [color, setColor] = useState(false)
  const [toggle, setToggle] = useState(false)
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
    if (window.scrollY >= 50) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', handleChangeColor)

  return (
    <nav className={color ? 'app-navbar-mobile-scroll' : 'app-navbar-mobile'}>
      {toggle ? (
        <div
          className="mobile-nav-container"
          style={{
            background: '#FAF9F9',
            transition: 'background 800ms ease-in-out',
          }}
        >
          <div>
            <div className="mobile-menu">
              <HiX
                onClick={() => setToggle(false)}
                className="menu-icon"
                style={{ fontSize: 35 }}
              />
              <p>Menu</p>
            </div>
            <div className="mobile-nav-links">
              <ul>
                {['home', 'about', 'shop', 'bestsellers', 'contact'].map(
                  (item, index) => (
                    <li key={item + index} className="flex">
                      <div />
                      <a href={item === 'home' ? `/` : `/${item}`}>{item}</a>
                    </li>
                  )
                )}
              </ul>
              <div className="sigin-container">
                {isLoggedIn ? (
                  <Avatar>{fullName}</Avatar>
                ) : (
                  <a href="/signin">
                    <p>Login</p>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="logo-container">
            <a href="/">
              <img src={images.logo} alt="logo" className="navbar-logo" />
            </a>
          </div>
          <div className="mobile-nav-icons">
            <div className="mobile-nav-search">
              <SearchIcon sx={{ fontSize: 25 }} />
            </div>
            <div className="cart-icon-container">
              <button
                type="button"
                className="cart-icon"
                onClick={handleOpenCart}
              >
                <ShoppingBasketOutlinedIcon />
                <span className="cart-item-qty">{totalQuantities}</span>
              </button>
            </div>
          </div>
          {showCart && <Cart />}
        </div>
      ) : (
        <div className="mobile-nav-container">
          <div className="mobile-menu">
            <MenuIcon
              onClick={() => setToggle(true)}
              className="menu-icon"
              sx={{ fontSize: 35 }}
            />
            <p>Menu</p>
          </div>
          <div className="logo-container">
            <a href="/">
              <img src={images.logo} alt="logo" className="navbar-logo" />
            </a>
          </div>
          <div className="mobile-nav-icons">
            <div className="mobile-nav-search">
              <SearchIcon sx={{ fontSize: 25 }} />
            </div>
            <div className="cart-icon-container">
              <button
                type="button"
                className="cart-icon"
                onClick={handleOpenCart}
              >
                <ShoppingBasketOutlinedIcon />
                <span className="cart-item-qty">{totalQuantities}</span>
              </button>
            </div>
          </div>

          {showCart && <Cart />}
        </div>
      )}
    </nav>
  )
}

export default MobileNavbar
