//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item13.css";

class Item13 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/poloshirts">Back to Results </a>
        <h2>Mens Polo</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/K420_royal_model_front_large.jpg?v=1538078042"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $27.48</h5>
        <p></p>
        <h6> Description: </h6>
        <p>A favorite year after year, these polos are known for their exceptional range of colors, styles and sizes. The soft pique knit is shrink-resistant and easy to care for, so your group will always look its best.</p>
          <ul>
            <li>7-ounce, 100% ring spun combed cotton heavyweight pique (preshrunk)</li>
            <li>Garment washed for softness</li>
            <li>Double-needle stitching throughout</li>
            <li>Traditional, relaxed look</li>
            <li>Flat knit collar and cuffs</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
      </div>
      </div>
    );
  }
}

export default Item13
