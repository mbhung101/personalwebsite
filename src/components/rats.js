import React, { Component } from 'react'
import Nav from './nav'
export default class Sprout extends Component {

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
              <img src={require('./imgs/rats.png')}/>
            </div>

            <div className="column">
              <h2> Rats, Crime, Fire </h2>
              <hr></hr>
              <div>
              As the name implies, this collaborative app utilizes New York Department of Health and Mental Hygiene 311 complaints to locate the location of different complaint types, including rats and some minor crimes.
              Using the Google Maps API, before you buy or rent a residence, you would be wise to search if there are any unwanted neighbors.
              The app also includes some statistics on total complaints and a fun quiz on the aggergated data.
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
                <div role="listitem" className="item">HTML5 frontend</div>
                <div role="listitem" className="item">Ruby on Rails REST API backend</div>
                <div role="listitem" className="item">AJAX and JQuery interfaces</div>
                <div role="listitem" className="item"> Google Maps API integration</div>
                <div role="listitem" className="item">Fusion Charts data visualization</div>
                <div role="listitem" className="item">Hosted on Heroku</div>
              </div>
            </div>
            </div>

            <div className="column">
              <h2> Resources </h2>
              <div className= "ui text container">
              <a href ="https://github.com/chrnobyl/Rats-Crime-Fire">Frontend/Backend github link</a>
              </div>
              <div className= "ui text container">
              <a href ="https://rcf-client.herokuapp.com/">Heroku link</a>
              </div>
            </div>
          </div>

        </div>
        </div>

      </div>
    )}
}
