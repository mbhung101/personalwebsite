import React, { Component } from 'react'
import Home from '../components/home'
import Projects from '../components/projects'
import Fun from '../components/fun'
import Resume from '../components/resume'
import Home2 from '../components/home2'
import Random from '../components/random'
import Sprout from '../components/sprout'
import Chat from '../components/chat'
import Rats from '../components/rats'
import Gold from '../components/gold'
import Aero from '../components/aero'
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
          <Route exact path = '/chat' render= {() =><Chat/>}/>
          <Route exact path = '/home' render= {() =><Home2/>}/>
          <Route exact path = '/projects' render= {() =><Projects/>}/>
          <Route exact path = '/projects/sprout' render= {() =><Sprout/>}/>
          <Route exact path = '/projects/rats' render= {() =><Rats/>}/>
          <Route exact path = '/projects/random' render= {() =><Random/>}/>
          <Route exact path = '/fun' render= {() =><Fun/>}/>
          <Route exact path = '/resume' render= {() =><Resume/>}/>
          <Route exact path = '/gold' render= {() =><Gold/>}/>
          <Route exact path = '/aero' render= {() =><Aero/>}/>
        </div>
      </BrowserRouter>
    )
  }
}
