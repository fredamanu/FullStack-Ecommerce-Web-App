import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsBagCheckFill } from 'react-icons/bs'
import { cartReset } from '../redux/actions/cart'
import Fireworks from '../utils/Fireworks'

export default function Success() {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    localStorage.clear()
    dispatch(cartReset())
    Fireworks()
  }, [dispatch])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className="email-msg">
          Check your email inbox for the order receipt
        </p>
        <p className="description">
          If you have any questions, please email{' '}
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link to="/">
          <button type="button" className="btn success-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}
