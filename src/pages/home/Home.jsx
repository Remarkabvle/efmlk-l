import React from 'react'
import HeroSection from '../../components/hero/HeroSection'
import Item from '../../components/item/Item'
import ProductsList from '../../features/products/ProductsList'

function Home() {
  return (
    <div>
      <HeroSection/>
      <Item/>
      <ProductsList/>
    </div>
  )
}

export default Home
