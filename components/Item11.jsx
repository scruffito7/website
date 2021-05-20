//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item11.css";

class Item11 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/outerwear">Back to Results </a>
        <h2>All-Season Jacket</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/J304_Black_Model_Front_072810_large.jpg?v=1538064378"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $77.48</h5>
        <p></p>
        <h6> Description: </h6>
        <p>Our All-Season II Jacket is waterproof and critically seam sealed. Colorblock panels at the sides and sleeves give this jacket year-round appeal.</p>
          <ul>
            <li>100% Taslan nylon shell</li>
            <li>100% microfleece body lining</li>
            <li>100% polyester sleeve lining for easy on/off</li>
            <li>3000MM fabric waterproof rating</li>
            <li>Critically seam-sealed for added waterproof protection</li>
            <li>3000G/M2 fabric breathability rating</li>
            <li>Zip-off hood with drawcord and toggles for adjustability</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
      </div>
      </div>
    );
  }
}

export default Item11
