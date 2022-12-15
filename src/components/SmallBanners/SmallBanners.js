import React from 'react'
import './SmallBanners.css'
import '../mediaQueries/mediaQueries.css'


const SmallBanners = () => {
  return (

    <>
    {/* Small banners */}
    <section id="sm-banner" className="section-p1">
      <div className="banner-box-1">
        <h4>Crazy deals</h4>
        <h2>buy 1 get 1 free</h2>
        <span>The best classic dress is on sale at cara</span>
        <button className="white">Learn More</button>
      </div>
      <div className="banner-box-1 banner-box-2">
        <h4>Spring/Summer</h4>
        <h2>Upcoming Season</h2>
        <span>The best classic dress is on sale at cara</span>
        <button className="white">Collection</button>
      </div>

    </section>
    {/* Banner 3 sections */}
    <section id="banner3">
      <div className="banner-box-1 box-1">
        <h2>SEASONAL SALE</h2>
        <h3>Seasonal collection 50% off</h3>
        
      </div>
      <div className="banner-box-1 box-2">
        <h2>NEW FOOTWEAR COLLECTION</h2>
        <h3>Spring/Summer 2022</h3>
        
      </div>
      <div className="banner-box-1 box-3">
        <h2>T-SHIRTS</h2>
        <h3>New Trendy Prints</h3>
        
      </div>

    </section>

    </>
  )
}

export default SmallBanners
