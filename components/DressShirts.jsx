//Lucas Rankin

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class DressShirts extends Component {
  render(){
    return(
      <div>
      <Navbar />
      <Footer />
      <div className = "container">
      <h2> DressShirts</h2>
      <ul>
        <Link className = "item5" to = "/item5"><img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/L608_Royal_Model_Front_2010_large.jpg?v=1538077041"width = "200" height = "300"/> Long Sleeve </Link>
        <Link className = "item6" to = "/item6"><img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/L508_royal_model_front_072014_large.jpg?v=1538077374"width = "200" height = "300"/> Short Sleeve </Link>
        <Link className = "item7" to = "/item7"><img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/S608_royal_model_front_072014_large.jpg?v=1538077916"width = "200" height = "300"/> Long Sleeve </Link>
        <Link className = "item8" to = "/item8"><img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/S508_royal_model_front_072014_large.jpg?v=1538078322"width = "200" height = "300"/> Short Sleeve </Link>
      </ul>

      </div>
</div>
    );
  }
}

export default DressShirts
