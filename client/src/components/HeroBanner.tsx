import React from 'react'
import { BannerDocument } from '../../../api/src/models/Banner'

type Props = {
  data: BannerDocument
}

const HeroBanner: React.FC<Props> = ({
  data: { smallText, midText, largeText, image, description, buttonText },
}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        {/* <h1>{largeText}</h1> */}
        <img
          src="https://res.cloudinary.com/defgcg7hn/image/upload/v1661431516/banner/How-To-Moisturize-4C-Hair-Banner1_myj6ay.png"
          alt="treatment set"
          className="hero-banner-image"
        />
        <div>
          <a href="/shop">
            <button type="button">{buttonText}</button>
          </a>
          <div className="desc">
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
