import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './CarouselImage.css'

const CarouselImages = () => {
  return (
    <Carousel fade style={{ height: 650 }} indicators={false}>
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

          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/defgcg7hn/image/upload/v1662204586/banner/Untitled_design_2_ye53ns.png"
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

          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselImages
