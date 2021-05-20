//Lucas Rankin

import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class About extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <div className = "container">
        <h2>About</h2>
        <img id = "selfie" src = "https://lh6.googleusercontent.com/Y-RX2TXjVFidraW-yZ3dhEqneSUYEGV48en1cBT_hT1K-Nw4Y9_yvOYxSq5Odj-5AJ1pmNZus3usCHawfszxWsU=w1280" width = "300" height = "300"/>
         <p>Made by Lucas and Stewart </p>
         <br></br>
         <br></br>
        </div>
      </div>
    );
  }
}

export default About
