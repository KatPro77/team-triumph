import React, { Component } from 'react'
import './cams.css'
import Navbar from '../../components/navbar/navbar.js'
import SimpleModalWrapped from '../../components/modal/modal.js'
import ButtonBases from '../../components/complexbutton/complexbutton.js'


  
const gorillaCam = [
    {
      alt:'gorilla cam',
      src: "https://www.youtube.com/embed/pHtOPHLhQME",
      title: 'Gorilla Cam',
      width: '33%',
    }
  ]; 

  const bearCam = [
    {
      alt:'gorilla cam',
      src: "https://www.youtube.com/embed/pHtOPHLhQME",
      title: 'Gorilla Cam',
      width: '33%',
    },
  ]; 

  const pandaCam = [
    {
      alt:'gorilla cam',
      src: "https://www.youtube.com/embed/pHtOPHLhQME",
      title: 'Gorilla Cam',
      width: '33%',
    },
  ]; 

class Cams extends Component {
  

  render() {
    return (
      <div>
        <Navbar />
        <SimpleModalWrapped  />

     </div>
    );
  }
}

export default Cams;