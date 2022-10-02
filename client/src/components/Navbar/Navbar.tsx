import React, { useState } from 'react'
import { Toolbar } from '@mui/material/'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined'

import { images } from '../../assets'
import { State } from '../../types'
import Cart from '../Cart/Cart'
import { openCart } from '../../redux/actions/cart'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import AccountMenu from '../AccountMenu/AccountMenu'

const Navbar = () => {
  const [color, setColor] = useState(false)
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
    <nav className={'app-navbar'}>
      <div className="logo-container">
        <a href="/">
          <img src={images.logo} alt="logo" className="navbar-logo" />
        </a>
      </div>
      <ul className="nav-links">
        {['home', 'shop', 'contact'].map(
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
      <Toolbar>
        <div className="sigin-container">
          <AccountMenu/>
        </div>
      </Toolbar>
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

export default Navbar