//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item3.css";

class Item3 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/accessories">Back to Results </a>
        <h2>Mountain Lodge Blanket</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/BP40_HearthGrey_Folded_071312_large.jpg?v=1538078221"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $47.48</h5>
        <p></p>
        <h6> Description: </h6>
        <p>Bring comfort, style and warmth to your home with this luxurious blanket. Our Mountain Lodge Blanket features a cozy fleece face that reverses to soft sherpa.</p>
          <ul>
            <li>11-ounce, 100% polyester fleece; 12-ounce, 100% polyester sherpa</li>
            <li>Fully hemmed</li>
            <li>Port Pocket™ for easy embroidery access</li>
            <li>Dimensions: 50" x 60"</li>
          </ul>
      </div>
      </div>
    );
  }
}

export default Item3
