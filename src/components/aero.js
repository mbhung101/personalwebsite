import React, { Component } from 'react'
import Nav from './nav'

export default class Aero extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <Nav/>
        <div style={{padding:20}}>
        <div className="ui grid">
          <div className="two column row">

            <div className="column">
              <img src={require('./imgs/graph1.png')}/>
            </div>

            <div className="column">
              <h2> Barrick Test Page</h2>
              <hr></hr>
              <div>
              A simple network graph visulaization using vis js for React to represent some relations between Seattle's aerospace industry.
              </div>
            </div>

          </div>
        </div>
        </div>

        <hr></hr>

        <div style={{padding:20}}>
        <div className="ui grid">
          <div className="two column row">

            <div className="column">
            <h2>Features/Technologies Used </h2>
            <div className = "ui text container">
              <div role="list" className="ui bulleted list">
                <div role="listitem" className="item">React frontend</div>
                <div role="listitem" className="item">Vis Js network graph</div>
              </div>
            </div>
            </div>

            <div className="column">
              <h2> Resources </h2>
              <div className= "ui text container">
              <a href ="https://github.com/mbhung101/aeromap">Frontend github link</a>
              </div>
            </div>
          </div>

        </div>
        </div>

      </div>
    )}
}
