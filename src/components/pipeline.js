import React, { Component } from 'react'
import Nav from './nav'

export default class Pipeline extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <Nav/>
        <p>
          Pipeline
        </p>
      </div>
    )
  }
}
