//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item5.css";

class Item7 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/dressshirts">Back to Results </a>
        <h2>Long Sleeve</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/S608_royal_model_front_072014_large.jpg?v=1538077916"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $29.48</h5>
        <p></p>
        <h6> Description: </h6>
        <p>This comfortable wash-and-wear shirt is indispensable for the workday. Wrinkle resistance makes this shirt a cut above the competition so you and your staff can be too.</p>
          <ul>
            <li>4.5-ounce, 55/45 cotton/poly</li>
            <li>Button-down collar</li>
            <li>Dyed-to-match buttonsr</li>
            <li>Patch pocket</li>
            <li>Box back pleat</li>
            <li>Adjustable cuffs</li>
            <li>White, Athletic Gold, Texas Orange, Red, Burgundy, Coffee Bean, Light Blue, Navy, Classic Navy, Steel Grey, Purple and Black have a Light Stone contrast neckband.</li>
            <li>Light Stone and Royal have a Classic Navy contrast neckband.</li>
            <li>Dark Green has a Navy contrast neckband.</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
      </div>
      </div>
    );
  }
}

export default Item7
