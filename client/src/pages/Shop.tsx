import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import { images } from '../assets'
import TextField from '@mui/material/TextField'
import {
  FilteredProducts,
  Footer,
  HeroBanner,
  Navigation,
  Product,
} from '../components'
import { useProducts } from '../hooks/fectchData'
import { State } from '../types'
import { ProductDocument } from '../../../api/src/models/Product'

export default function Shop() {
  return (
    <div className="layout">
      <header>
        <Navigation />
      </header>
      <main className="main-container">
        <>
          <div className="shop-banner"></div>
          <FilteredProducts />
        </>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
