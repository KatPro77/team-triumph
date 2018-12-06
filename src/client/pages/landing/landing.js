import React, { Component } from 'react';
import './landing.css';
import Carousel from '../../components/carousel/carousel.js'
import SimpleModalWrapped from '../../components/modal/modal.js'

export default class Landing extends Component {
  render() {
    return (
      <div>
    
        <Carousel />
        <SimpleModalWrapped />
     
      </div>
      
    );
  }
}


