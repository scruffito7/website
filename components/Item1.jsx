//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item1.css";

class Item1 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/accessories">Back to Results </a>
        <h2>Garage Sign</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/SIGN_efc565d5-1bb9-4c86-b27c-3b0f64d453b5_large.png?v=1525112026&dd=MzA1MDUHCQAABAUIDAANBQgDAQ0BAgwCSQoCBAQBB0wEBgQFBAICAQAASQ%3D%3D"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $0</h5>
        <p></p>
        <h6> Description: </h6>
        <p>Outdoor material sign with student's name & sport or activity.</p>
      </div>
      </div>
    );
  }
}

export default Item1
