import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function Footer() {
  return (
    <div className="footer-container">
      <p>2022 NC Online Shop All rights reserved</p>
      <p className="icons">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </p>
    </div>
  )
}
