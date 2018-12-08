import React, { Component } from 'react'
import './cams.css'
import SimpleModalWrapped from '../../components/modal/modal.js'
import animals from 'src/client/animals.json'
import { Typography } from '@material-ui/core'
import ButtonBase from './complexbutton.js'

class cams extends Component {
 // Setting this.state.friends to the animals json array
 state = {
   animals
 };


 render() {
   return (

     <SimpleModalWrapped>
     <Typography>Live Cams</Typography>
     <ButtonBase />

     {this.state.animals.map(animals => (
       <AnimalCard
         id={animals.id}
         key={animals.id}
         name={animals.name}
         image={animals.image}
         video={animals.url}
       />
     ))}

   </SimpleModalWrapped>

   );
 }
}
export default cams;