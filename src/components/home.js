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
        <div classname="ui container">
          <p> Hi, my name is Matthew Hung, a fullstack developer.  </p>
        </div>
      </div>
    )
  }
}
