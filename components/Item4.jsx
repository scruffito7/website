//Lucas

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import "./Item4.css";

class Item4 extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <a href = "http://localhost:3000/accessories">Back to Results </a>
        <h2>Fleece Blanket</h2>
        <img src = "https://cdn.shopify.com/s/files/1/0797/4925/products/BP10_Folded_MidnightHthr_large.jpg?v=1538078632"/>
        <div class = "button d-md-block">
        <button>Add to Cart</button>
        </div>
        <p></p>
        <h5>Price: $22.48</h5>
        <p></p>
        <h6> Description: </h6>
        <p>Our value blanket is soft on the budget, but sturdily constructed with blanket stitch hem to guard against fraying. The easy-to-carry strap makes it perfect for events.</p>
          <ul>
            <li>13.5-ounce, 100% spun polyester fleece</li>
            <li>Dyed-to-match blanket stitch hem</li>
            <li>Dimensions: 50" x 60"</li>
          </ul>
      </div>
      </div>
    );
  }
}

export default Item4
