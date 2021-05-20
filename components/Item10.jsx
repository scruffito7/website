//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item10.css";

class Item10 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/jerseys">Back to Results </a>
        <h2>Mens Jersey</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/ST307_trueroyal_model_front_112013_large.jpg?v=1438618745"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $25.00</h5>
        <p></p>
        <h6> Description: </h6>
        <p>True athletic-looking jerseys featuring a breathable mesh body and color-locking PosiCharge technology.</p>
          <ul>
            <li>3.5-ounce, 100% cationic polyester mesh body</li>
            <li>White is not cationic polyester</li>
            <li>Gently contoured silhouette</li>
            <li>Removable tag for comfort and relabeling</li>
            <li>Crossover v-neck</li>
            <li>Set-in sleeves</li>
            <li>Sleeve stripes</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
      </div>
      </div>
    );
  }
}

export default Item10
