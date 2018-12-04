import React, { Component } from 'react';
import './memory.css';
import Navbar from '../../components/navbar/navbar.js'
import { withStyles } from '@material-ui/core/styles';
import Button from '../../components/button/button.js'



export default class Memory extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="memory-card" data-framework="camel">
          <img className="front-face" src={"src/client/assets/images/memory/IMG_camel.jpg"} alt="camel" />
          <img className="back-face" src={"src/client/assets/images/memory/smiley.jpeg"} alt="smiley" />
        </div>
        <Button variant="contained" >
          Play Again!
      </Button>
      </div>

    );
  }
}