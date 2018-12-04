import React, { Component } from 'react';
import './landing.css';
import Navbar from '../../components/navbar/navbar.js'
import Carousel from '../../components/carousel/carousel.js'


export default class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
     
      </div>
      
    );
  }
}


