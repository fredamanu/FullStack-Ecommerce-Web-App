import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './CarouselImage.css'

const CarouselImages = () => {
  return (
    <Carousel fade indicators={false} nextIcon={false} prevIcon={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/defgcg7hn/image/upload/v1662204897/banner/Untitled_design_3_lunh9d.png"
          alt="First slide"
          style={{ height: 650 }}
        />
        <div className="carousel-caption text-left">
          <div style={{ textAlign: 'left' }}>
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
                <p id="desc1-p">Best wash and go combo on the market</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/defgcg7hn/image/upload/v1664399680/banner/Untitled_design_14_btezio.png"
          alt="Second slide"
        />

        <div className="carousel-caption two text-left">
          <div style={{ textAlign: 'left' }}>
            <p className="slogan" style={{ color: 'black' }}>
              Great Hair is Divine!
            </p>
            <h4 style={{ color: 'black' }}>Winter Sale</h4>
            <h3 style={{ color: 'black' }}>20% Off First Orders</h3>
            <h5 style={{ color: 'black' }}>Use Code: App2022</h5>
            <div>
              <a href="/shop">
                <button type="button">Shop Now</button>
              </a>
              <div className="desc">
                <h5 style={{ color: 'black' }}>Description</h5>
                <p id="desc-p" style={{ color: 'black' }}>
                  Best wash and go combo on the market
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/defgcg7hn/image/upload/v1664375600/banner/Untitled_design_10_opqv6x.png"
          alt="Second slide"
        />

        <div className="carousel-caption two text-left">
          <div style={{ textAlign: 'left' }}>
            <p className="slogan">Great Hair is Divine!</p>
            <h4>Winter Sale</h4>
            <h3>20% Off First Orders</h3>
            <h5>Use Code: App2022</h5>
            <div>
              <a href="/shop">
                <button type="button">Shop Now</button>
              </a>
              <div className="desc2">
                <h5>Description</h5>
                <p id="desc-p">Best wash and go combo on the market</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselImages
