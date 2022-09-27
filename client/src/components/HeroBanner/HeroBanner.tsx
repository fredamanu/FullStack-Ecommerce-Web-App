import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import CarouselImages from '../Carousel/CarouselImages'

import './HeroBanner.css'

const images = [
  'https://res.cloudinary.com/defgcg7hn/image/upload/v1662204897/banner/Untitled_design_3_lunh9d.png',
  'https://res.cloudinary.com/defgcg7hn/image/upload/v1662204586/banner/Untitled_design_2_ye53ns.png',
]

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  const imageUrl = images[currentIndex]

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 10000)
  }, [])

  return (
    <>
      <div
        className="hero-banner-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <CarouselImages />
        {/* <div style={{ width: 400, textAlign: 'center', marginTop: 80 }}>
          <p className="slogan">Great Hair is Divine!</p>
          <h4>Winter Sale</h4>
          <h3>20% Off First Orders</h3>
          <h5>Use Code: App2022</h5>
          <div>
            <a href="/shop">
              <button type="button">Shop Now</button>
            </a>
            <div className="desc">
              <h5>Description</h5>
              <p>Best wash and go combo on the market</p>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="carousel-btns app__flex">
        <div
          className="app__flex btn-left"
          onClick={() =>
            handleClick(
              currentIndex === 0 ? images.length - 1 : currentIndex - 1
            )
          }
        >
          <HiChevronLeft />
        </div>
        <div
          className="app__flex btn-right"
          onClick={() =>
            handleClick(
              currentIndex === images.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          <HiChevronRight />
        </div>
      </div> */}
    </>
  )
}

export default HeroBanner
