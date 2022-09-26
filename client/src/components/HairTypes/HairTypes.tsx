import React from 'react'

import './HairTypes.css'
import { images } from '../../assets'
const HairTypes = () => {
  return (
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
        <img
          src="https://static.wixstatic.com/media/47dc1a2a954d4182ad2f6fb6d34f2cff.jpg/v1/fill/w_640,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/47dc1a2a954d4182ad2f6fb6d34f2cff.jpg"
          alt="hair type"
        />
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
  )
}

export default HairTypes
