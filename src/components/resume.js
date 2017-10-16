import React, { Component } from 'react'
import Nav from './nav'

export default class Resume extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <Nav/>
        <h2> Employment History </h2>
        <hr></hr>
        <img style={{width:250,height:250}} src={require('./imgs/mts.jpg')} />
      </div>
    )
  }
}
