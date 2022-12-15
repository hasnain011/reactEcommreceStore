import React from 'react'
import './AboutSection.css'
import '../mediaQueries/mediaQueries.css'

const AboutSection = () => {
  return (
    <>
    <section id="about-head" className="section-p1">
    <img src="../img/about/a6.jpg" alt=""/>
    <div>
      <h2>Who We Are</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptates officia dolor cumque quam
        consequuntur unde sed, saepe fuga deleniti sunt commodi. Culpa nostrum inventore alias reiciendis, vitae natus
        beatae nemo unde! Deserunt molestiae magnam expedita tempora culpa facilis sunt, similique incidunt quis.
        Consectetur commodi reprehenderit unde? Sit perspiciatis, aliquam tenetur hic fugiat asperiores voluptatum
        voluptas sequi impedit est tempora possimus alias placeat laboriosam consequatur? Neque culpa veniam dolorem
        eligendi.</p>

      <abbr title="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nam eius vel
        consectetur.</abbr><br/><br/>
      <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
      </marquee>
    </div>
  </section>

  {/* Download App Section */}
  <section id="about-app" className="section-p1">
    <h1>Download Our <a href="#">App</a></h1>
    <div className="video">
      <video autoPlay muted loop src="../img/about/1.mp4"></video>
    </div>
  </section>
    </>
  )
}

export default AboutSection
