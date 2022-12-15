import React from 'react'
import './Banner.css'
import '../mediaQueries/mediaQueries.css'

const Banner = () => {
  return (
    <section id="banner" className="section-m1">
      <h4>Repair Servcies</h4>
      <h2>Up to <span> 70% off</span>- All T-shirts and Accecories</h2>
      <button className="normal">Explore More</button>
    </section>
  )
}

export default Banner
