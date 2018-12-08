import React, { Component } from 'react'
import './cams.css'
import Navbar from '../../components/navbar/navbar.js'
// import SimpleModalWrapped from '../../components/modal/modal.js'
import ButtonBases from '../../components/complexbutton/complexbutton.js'
import animals from '../../src/client/animal.json'
import SimpleModalWrapped from '../../components/modal/modal';


  
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

  state = {
    animals: []
  }

  componentDidMount() {
    event.onClick()
    .then(this.setState({ animals: animals.id}))
    .catch(err => console.log(err));
  }
  

  render() {
    return (
      <div>
        <Navbar />
        <SimpleModalWrapped
          onClick={this.onClick}
          animals={this.state.video} 
        />

     </div>
    );
  }
}

export default Cams;