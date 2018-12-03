import React, { Component } from 'react';
import Button from 'material-ui'
import './cams.css';
import Navbar from '../../components/navbar/navbar.js';
import SimpleModalWrapped from '../../components/modal/modal.js'
import ButtonBases from '../../components/complexbutton/complexbutton.js'
import Button from '@material-ui/core/Button';



  
// const gorillaCam = [
//     {
//       alt:'gorilla cam',
//       src: "https://www.youtube.com/embed/pHtOPHLhQME",
//       title: 'Gorilla Cam',
//       width: '33%',
//     }
//   ]; 

//   const bearCam = [
//     {
//       alt:'gorilla cam',
//       src: "https://www.youtube.com/embed/pHtOPHLhQME",
//       title: 'Gorilla Cam',
//       width: '33%',
//     },
//   ]; 

//   const pandaCam = [
//     {
//       alt:'gorilla cam',
//       src: "https://www.youtube.com/embed/pHtOPHLhQME",
//       title: 'Gorilla Cam',
//       width: '33%',
//     },
//   ]; 

class Cams extends Component {
  
handleOpen = () => {
  this.setState({ open: true });
      };
handleClose = () => {
this.setState({ open: false });
      };

  render() {
    return (
      <div>
        <Navbar />
        <ButtonBases onClick={this.handleOpen}/>
        <SimpleModalWrapped  />
     </div>
    );
  }
}

export default Cams;