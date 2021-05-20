//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item17.css";

class Item17 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/TShirts">Back to Results </a>
        <h2>Mens T-Shirt</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/5250_DeepRoyal_RoyalTee_Tshirt_large.jpg?v=1438618564"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $15.00</h5>
        <p></p>
        <h6> Description: </h6>
        <p>A year-round essential, our best-selling t-shirt has been voted "most popular" by groups, teams, clubs and schools across America.</p>
          <ul>
            <li>Heavyweight 6.1-ounce, 100% soft spun cotton</li>
            <li>Double-needle sleeves and hem</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
      </div>
      </div>
    );
  }
}

export default Item17
