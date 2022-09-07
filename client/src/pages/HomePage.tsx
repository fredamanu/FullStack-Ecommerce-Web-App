import React from 'react'
import { useSelector } from 'react-redux'

import '../styles/globals.css'
import { useBestSellers } from '../hooks/fectchData'
import { Product, Footer, Navbar, HeroBanner } from '../components'
import { State } from '../types'

export default function HomePage() {
  const bestSellers = useSelector((state: State) => state.bestsellers.data)
  useBestSellers()

  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <>
          <HeroBanner />

          <div className="products-heading">
            <h2>Best Selling Products</h2>
            <p>Conditioners of many variation</p>
          </div>
          <div className="products-container">
            {bestSellers?.map((bestSeller) => {
              return <Product product={bestSeller} key={bestSeller._id} />
            })}
          </div>
        </>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
