import React from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import "./Success.css"

const Success = () => {
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
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            info@naturallycurly.com
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

export default Success