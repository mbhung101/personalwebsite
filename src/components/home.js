import React, { Component } from 'react'
import Nav from './nav'

export default class Home extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <Nav/>
        Home
      </div>
    )
  }
}
