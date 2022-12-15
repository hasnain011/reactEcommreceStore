import React from 'react'
import NewArrival from '../components/NewArrivalSection/NewArrival'
import ProductsSection from '../components/ProductsSection/ProductsSection'
import TopBanner from '../components/TopBanner/TopBanner'

const Shop = () => {
  return (
    <>
     <TopBanner heading="Stay Home And Shop" desc ="Save more with Coupons & up to 70% off!"/>
     <ProductsSection/>
     <NewArrival/>
    </>
  )
}

export default Shop
