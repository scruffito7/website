//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item2.css";

class Item2 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/accessories">Back to Results </a>
        <h2>Golf Towel</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/TW50_Black_Accessories06_pg36_large.jpg?v=1538076642"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $14.48</h5>
        <p></p>
        <h6> Description: </h6>
        <p>The essential companion for any golf outing.</p>
          <ul>
            <li>100% cotton terry velour</li>
            <li>Fully hemmed for a clean look</li>
            <li>Silver grommet and hook to hang towel off bag</li>
            <li>Dimensions: 16" x 26", 3.5 lbs/doz</li>
          </ul>
      </div>
      </div>
    );
  }
}

export default Item2
