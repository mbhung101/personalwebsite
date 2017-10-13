import React, { Component } from 'react'
import Landing from '../components/landing'

export default class HomeContainer extends Component {

  constructor(){
    super()
    this.state = {
      user: {}
    }
  }
  render(){
    return(
      <div>
        <Landing/>
      </div>
    )
  }
}
