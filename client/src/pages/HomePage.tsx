import React from 'react'
import { useSelector } from 'react-redux'

import '../styles/globals.css'
import { useBanner, useBestSellers } from '../hooks/fectchData'
import {
  Product,
  Footer,
  Navbar,
  HeroBanner,
  FooterBanner,
} from '../components'
import { State } from '../types'

export default function HomePage() {
  const { bannerData } = useBanner('http://localhost:5000/api/v1/banner')

  const bestSellers = useSelector((state: State) => state.bestsellers.data)
  // useProducts()
  useBestSellers()

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <>
          {bannerData?.map((banner) => {
            return <HeroBanner key={banner._id} data={banner} />
          })}
          <div className="products-heading">
            <h2>Best Selling Products</h2>
            <p>Conditioners of many variation</p>
          </div>
          <div className="products-container">
            {bestSellers?.map((bestSeller) => {
              return (
                <Product product={bestSeller.product} key={bestSeller._id} />
              )
            })}
          </div>
          {bannerData?.map((banner) => {
            return <FooterBanner key={banner._id} footerBanner={banner} />
          })}
        </>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
