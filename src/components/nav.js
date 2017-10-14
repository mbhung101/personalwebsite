import React, { Component } from 'react'

export default class Nav extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div className="ui tabular menu">
        <div style={{padding:10}}>
          <a href="/home" className="item">About</a>
        </div>
        <div style={{padding:10}}>
          <a href="/projects" className="item">Projects</a>
        </div>
        <div style={{padding:10}}>
          <a href="/writing" className="item">Writing</a>
        </div>
        <div style={{padding:10}}>
          <a href="/resume" className="item">Resume</a>
        </div>
        <div style={{padding:10}}>
          <a href="/contact" className="item">Contact</a>
        </div>
      </div>
    )
  }
}
