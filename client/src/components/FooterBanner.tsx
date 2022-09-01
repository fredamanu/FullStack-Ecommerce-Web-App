import React from 'react'
import { BannerDocument } from '../../../api/src/models/Banner'

type Props = {
  footerBanner: BannerDocument
}

const FooterBanner: React.FC<Props> = ({
  footerBanner: {
    discount,
    image,
    largeText,
    saleTime,
    smallText,
    midText,
    description,
    buttonText,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}% OFF</p>
          <h3>{largeText}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{description}</p>
          <a href="/shop">
            <button type="button">{buttonText}</button>
          </a>
        </div>
        <img
          src={image}
          alt="product"
          className="footer-banner-image"
          height={500}
          width={550}
        />
      </div>
    </div>
  )
}

export default FooterBanner
