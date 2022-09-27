import React from 'react'

import './HairTypes.css'
import { images } from '../../assets'
import MotionWrapper from '../../Wrapper/MotionWrapper'
const HairTypes = () => {
  return (
    <section id="hair-types">
      <div className="hair-heading">
        <h2>Know Your Hair Type?</h2>
      </div>
      <div className="hair-types-container">
        <div className="hair-types-card">
          <img src={images.straightened} alt="hair type" />
          <div className="hair-types-card-hover">
            <div className="center">
              <h5 className="title">Straight</h5>
              <div className="divider not"></div>
              <h6>Type 1 haircare routine</h6>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="hair-types-card">
          <img src={images.wavy} alt="hair type" />
          <div className="hair-types-card-hover">
            <div className="center">
              <h5 className="title">Wavy</h5>
              <div className="divider"></div>
              <h6>Type 2 haircare routine</h6>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="hair-types-card">
          <img src={images.curly} alt="hair type" />
          <div className="hair-types-card-hover">
            <div className="center">
              <h5 className="title">Curly</h5>
              <div className="divider"></div>
              <h6>Type 3 haircare routine</h6>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="hair-types-card">
          <img src={images.coily} alt="hair type" />
          <div className="hair-types-card-hover">
            <div className="center">
              <h5 className="title">Coily</h5>
              <div className="divider"></div>
              <h6>Type 4 haircare routine</h6>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MotionWrapper(HairTypes)
