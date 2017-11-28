import React, { Component } from 'react'

export default class Nav extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div className="ui tabular menu">
        <div style={{padding:10}}>
          <a href="/" className="item">About</a>
        </div>
        <div style={{padding:10}}>
          <a href="/resume" className="item">Resume</a>
        </div>
        <div style={{padding:10}}>
          <a href="/projects" className="item">Projects</a>
        </div>
        <div style={{padding:10}}>
          <a href="/pipeline" className="item">WIPS</a>
        </div>
        <div style={{padding:10}}>
          <a href="/fun" className="item">For Fun</a>
        </div>
      </div>
    )
  }
}
