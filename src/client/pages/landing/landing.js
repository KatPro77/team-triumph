import React, { Component } from 'react';
import './landing.css';
import Navbar from '../../components/navbar/navbar.js'
// import Carousel from '../../components/carousel/carousel.js'
import ButtonBases from '../../components/complexbutton/complexbutton.js'
import Button from '@material-ui/core/Button';
import SimpleModalWrapped from '../../components/modal/modal.js'




// export default class Landing extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Carousel />
//       </div>
//     );
//   }
// }

class Cams extends Component {
h
andleOpen = () => {
   this.setState({ open: true });
       };
 handleClose = () => {
 this.setState({ open: false });
       };
   render() {
     return (
        <div>
            <Navbar />
            <SimpleModalWrapped />
            <ButtonBases onClick={this.handleOpen}/>
        </div>
     );
   }
 }
 
 export default Cams;

