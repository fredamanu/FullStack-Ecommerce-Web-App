import React from 'react'
const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Great Hair is Divine!</p>
        <h3>Winter Sale</h3>
        <div>
          <a href="/shop">
            <button type="button">Shop Now</button>
          </a>
          <div className="desc">
            <h5>Description</h5>
            <p>Best wash and go combo on the market</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
