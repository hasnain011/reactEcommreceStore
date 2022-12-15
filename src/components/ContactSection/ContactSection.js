import React from 'react'
import './ContactSection.css'
import '../mediaQueries/mediaQueries.css'

const ContactSection = () => {
  return (
    <>
    <section id="contact-details" className="section-p1">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency location or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fal fa-map"></i>
                    <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li>
                    <i className="fal fa-envelope"></i>
                    <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li>
                    <i className="fal fa-phone-alt"></i>
                    <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li>
                    <i className="fal fa-clock"></i>
                    <p>Lorem ipsum dolor sit amet.</p>
                </li>
            </div>
        </div>
        <div className="map">
        <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        src="https://goo.gl/maps/S4QiKYQteER6bjZ19"
      />
        </div>

    </section>

    {/* <!-- Form details section --> */}
    <section id="form-details">

        <form action="">
            <span>Leave a message</span>
            <h2>We Love to hear from you</h2>
            <input type="text" placeholder="Your name"/>
            <input type="email" placeholder="Your Email"/>
            <input type="text" placeholder="Subject Line"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button className="normal">Submit</button>
        </form>

        <div className="people">
            <div>
                <img src="../img/people/1.png" alt=""/>
                <p><span>John Doe</span> Senior markiting manager <br/>Phone: +345398659<br/>Email: contact@234gmail.com</p>
            </div>
            <div>
                <img src="../img/people/2.png" alt=""/>
                <p><span>John Doe</span> Senior markiting manager <br/>Phone: +345398659<br/>Email: contact@234gmail.com</p>
            </div>
            <div>
                <img src="../img/people/3.png" alt=""/>
                <p><span>John Doe</span> Senior markiting manager <br/>Phone: +345398659<br/>Email: contact@234gmail.com</p>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default ContactSection
