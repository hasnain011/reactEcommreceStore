import React from 'react'
import './Footer.css'
import '../mediaQueries/mediaQueries.css'

const Footer = () => {
  return (
    <footer>
        <div class="col address">
        <img class="logo" src="../img/logo.png" alt=""/>
        <h4>Contact</h4>
        <p><strong>Address:</strong>Willengton Road, Street 22, San Francisco</p>
        <p><strong>Phone:</strong>+01 2222 365 /(+91) 01 2345 6789</p>
        <p><strong>Hours:</strong>10:00 - 18:00 Mon - Sat</p>

        <div class="follow">
          <h4>Follow Us</h4>
          
          <div class="icon">
            <i  class="fab fa-facebook-f"></i>
            <i  class="fab fa-twitter"></i>
            <i  class="fab fa-instagram"></i>
            <i  class="fab fa-pinterest-p"></i>
            <i  class="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div class="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact us</a>
        </div>
      
        <div class="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track my order</a>
          <a href="#">Help</a>
        </div>

        <div class="col install">
          <h4>Install App</h4>
          <p>From App Store or Google play</p>
          <div class="row">
            <img src="../img/pay/app.jpg" alt=""/>
            <img src="../img/pay/play.jpg" alt=""/>
          </div>
          <p>Secure Payment Gateways</p>
          <img src="../img/pay/pay.png" alt=""/>

        </div>

        <div class="copywrite">
          <p>© 2022, EStore - HTML CSS JS </p>
        </div>
     
    </footer>
  )
}

export default Footer

