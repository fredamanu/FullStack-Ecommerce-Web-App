import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import { Footer, HeroBanner, Navigation, Product } from '../components'
import { useProducts } from '../hooks/fectchData'
import { State } from '../types'

export default function Shop() {
  const products = useSelector((state: State) => state.products.data)

  useProducts()

  const [keyword, setKeyword] = useState<string>('')

  const filteredProducts = products?.filter((product) => {
    return product.name.toLocaleLowerCase().includes(keyword.toLowerCase())
  })

  return (
    <div className="layout">
      <header>
        <Navigation />
      </header>
      <main className="main-container">
        <>
          <HeroBanner />
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
        </>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
