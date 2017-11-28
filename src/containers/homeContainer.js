import React, { Component } from 'react'
import Home from '../components/home'
import Projects from '../components/projects'
import Fun from '../components/fun'
import Resume from '../components/resume'
import Wips from '../components/wips'
import Home2 from '../components/home2'
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
          <Route exact path = '/' render= {() =><Home/>}/>
          <Route exact path = '/home' render= {() =><Home2/>}/>
          <Route exact path = '/projects' render= {() =><Projects/>}/>
          <Route exact path = '/fun' render= {() =><Fun/>}/>
          <Route exact path = '/resume' render= {() =><Resume/>}/>
          <Route exact path = '/pipeline' render= {() =><Wips/>}/>
        </div>
      </BrowserRouter>
    )
  }
}
