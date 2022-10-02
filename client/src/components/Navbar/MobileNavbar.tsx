import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu'
import { HiX } from 'react-icons/hi'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'

import { images } from '../../assets'
import { State } from '../../types'
import { openCart } from '../../redux/actions/cart'
import Cart from '../Cart/Cart'
import AccountMenu from '../AccountMenu/AccountMenu'

const MobileNavbar = () => {
  // @ts-ignore:next-line
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [color, setColor] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const dispatch = useDispatch<any>()
  const state = useSelector((state: State) => state)
  const showCart = state.cart.showCart
  const totalQuantities = state.cart.totalQuantities

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
    <nav className={'app-navbar-mobile'}>
      {openMenu ? (
        <div
          className="mobile-nav-container"
          style={{
            background: '#FAF9F9',
            transition: 'background 800ms ease-in-out',
          }}
        >
          <div>
            <div className="mobile-menu">
              <HiX onClick={() => setOpenMenu(false)} className="menu-icon" />
              <p>Menu</p>
            </div>
            <div className="mobile-nav-links">
              <ul>
                {['home', 'shop', 'contact', "search"].map((item, index) => (
                  <li key={item + index} className="flex">
                    <div />
                    <a href={item === 'home' ? `/` : `/${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="logo-container">
            <a href="/">
              <img src={images.logo} alt="logo" className="navbar-logo" />
            </a>
          </div>
          <div className="mobile-nav-icons">
          <div className="sigin-container">
              <AccountMenu />
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
            <MenuIcon onClick={() => setOpenMenu(true)} className="menu-icon" />
            <p>Menu</p>
          </div>
          <div className="logo-container">
            <a href="/">
              <img src={images.logo} alt="logo" className="navbar-logo" />
            </a>
          </div>
          <div className="mobile-nav-icons">
            <div className="sigin-container">
              <AccountMenu />
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
