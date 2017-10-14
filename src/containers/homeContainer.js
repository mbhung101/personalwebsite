import React, { Component } from 'react'
import Home from '../components/home'
import Projects from '../components/projects'
import Writing from '../components/writing'
import Resume from '../components/resume'
import Contact from '../components/contact'
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
          <Route exact path = '/writing' render= {() =><Writing/>}/>
          <Route exact path = '/resume' render= {() =><Resume/>}/>
          <Route exact path = '/contact' render= {() =><Contact/>}/>
        </div>
      </BrowserRouter>
    )
  }
}
