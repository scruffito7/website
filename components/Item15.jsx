//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item15.css";

class Item15 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/sweatshirts">Back to Results </a>
        <h2>Mens 1/2-Zip Pullover</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/ST850_Black_Model_Front_071310_large.jpg?v=1538078528"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $39.48</h5>
        <p></p>
        <h6> Description: </h6>
        <p>An extremely flexible layer with a soft-brushed backing and moisture control for year-round comfort.</p>
          <ul>
            <li>6.8-ounce, 90/10 poly/spandex</li>
            <li>Tag-free label</li>
            <li>Gently contoured silhouette</li>
            <li>Chin guard eliminates skin irritation</li>
            <li>Cadet collar</li>
            <li>Raglan sleeves</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
      </div>
      </div>
    );
  }
}

export default Item15
