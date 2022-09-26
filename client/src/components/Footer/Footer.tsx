import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PinterestIcon from '@mui/icons-material/Pinterest'
import { FaTiktok } from 'react-icons/fa'

import { images } from '../../assets'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-navigation">
        <div className="socials">
          <div>
            <h5>Look Great. Feel Awesome!!</h5>
            <h6>© Naturally Curly Haircare </h6>
            <div>
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <YouTubeIcon />
              <PinterestIcon />
              <FaTiktok />
            </div>
          </div>
        </div>
        <div className="menu">
          <h5>Menu</h5>
          <ul>
            {[
              'home',
              'about',
              'shop',
              'bestsellers',
              'contact',
              'return policy',
              'shipping',
              'privacy policy',
            ].map((item, index) => (
              <li key={index}>
                <a href={item === 'home' ? `/` : `/${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="c-t-a">
          <h5>Subscribe</h5>
          <h6>Join our NC Network for updates and offers!</h6>
          <form method="post">
            <input placeholder="Your Email" name="email" />
            <button type="submit">OK</button>
          </form>
        </div>
      </div>
      <div className="accepted-payments">
        <img src={images.visa} alt="visa" />
        <img src={images.mastercard} alt="mastercard" />
        <img src={images.paypal} alt="paypal" />
        <img src={images.klarna} alt="klarna" />
        <img src={images.meta} alt="meta" />
        <img src={images.discover} alt="discover" />
        <img src={images.googlepay} alt="googlepay" />
        <img src={images.applepay} alt="discover" />
      </div>
    </div>
  )
}
