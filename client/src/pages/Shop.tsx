import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import {
  Footer,
  FooterBanner,
  HeroBanner,
  Navbar,
  Product,
} from '../components'
import { useBanner, useProducts } from '../hooks/fectchData'
import { State } from '../types'

export default function Shop() {
  const { bannerData } = useBanner('http://localhost:5000/api/v1/banner')
  const products = useSelector((state: State) => state.products.data)

  useProducts()

  const [keyword, setKeyword] = useState<string>('')

  const filteredProducts = products?.filter((product) => {
    return product.name.toLocaleLowerCase().includes(keyword.toLowerCase())
  })

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
          <div className="products-searchbar">
            <TextField
              fullWidth
              label="Search Products"
              onChange={(e) => {
                setKeyword(e.target.value)
              }}
            />
          </div>
          <div className="products-container">
            {filteredProducts.map((product) => {
              return <Product key={product._id} product={product} />
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
