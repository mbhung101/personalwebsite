import React, { Component } from 'react'
import Home from '../components/home'
import Projects from '../components/projects'
import Reviews from '../components/reviews'
import { Route, BrowserRouter } from 'react-router-dom'

export default class HomeContainer extends Component {

  constructor(){
    super()
    this.state = {
      user: {}
    }
  }
  render(){
    return(
      <BrowserRouter>
        <div>
          <Route exact path = '/home' render= {() =><Home/>}/>
          <Route exact path = '/projects' render= {() =><Projects/>}/>
          <Route exact path = '/reviews' render= {() =><Reviews/>}/>
        </div>
      </BrowserRouter>
    )
  }
}
