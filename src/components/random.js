import React, { Component } from 'react'
import Nav from './nav'
export default class Random extends Component {

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
              <img src={require('./imgs/racer2.png')}/>
            </div>

            <div className="column">
              <h2> Random Race </h2>
              <hr></hr>
              <div>
              Decide the a random order of contestants; perfect for draft orders, games or just plain fun. Currently only text, but visual elements on the way.
              Bulky Javascript recusrion alogrithm determines order based on incremental increases to track progress like a race; much less efficiently than merely getting a random integer.
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
                <div role="listitem" className="item">"Charming" homemade Javascript recursion</div>
                <div role="listitem" className="item">Semantic UI stylesheet CSS</div>
              </div>
            </div>
            </div>

            <div className="column">
              <h2> Resources </h2>
              <div className= "ui text container">
              <a href ="https://github.com/mbhung101/RandomRacer">Frontend github link</a>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    )}
}
