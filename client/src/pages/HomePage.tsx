import React from 'react'


import '../styles/globals.css'
import { useBestSellers, useProducts } from '../hooks/fectchData'
import {
  Footer,
  Navigation,
  HeroBanner,
  HairTypes,
  Disclaimer,
  BestSellers,
} from '../components'

import MoistureProducts from '../components/MoistureProducts/MoistureProducts'

export default function HomePage() {
  useBestSellers()
  useProducts()


  return (
    <div className="layout">
      <header>
        <Navigation />
      </header>
      <main className="main-container">
        <HeroBanner />
        <BestSellers />
        <HairTypes />
        <MoistureProducts />
        <section id="disclaimer">
          <Disclaimer />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
