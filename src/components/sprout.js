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
              <img src={require('./imgs/sc2.png')}/>
            </div>

            <div className="column">
              <h2> Sprout </h2>
              <hr></hr>
              <div>
              Sprout is the ultimate tool for anyone who desires to grow plants in a more methodical way.
              Users can make gardens, alerts and check weather anywhere they have put roots down.
              Then, the gardener can input vegetable conditions into thier various gardens, record when they harvest and see how much they have gathered already.
              Data on the yield times, conditions and amounts can be sorted and accessed for any user to figure out how to best harvest your plants.
              All user harvests are aggregated, so you can learn about when to expect your next bounty.
              Competitive gardeners can also chart thier yields directly to others on a dynamically generated comparison chart.
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
                <div role="listitem" className="item">Ruby on Rails REST API Backend</div>
                <div role="listitem" className="item"> Postgres Database</div>
                <div role="listitem" className="item"> React Materialize CSS</div>
                <div role="listitem" className="item"> Darksky API integration for weather forecasts</div>
                <div role="listitem" className="item">Chart JS for data visualizations</div>
              </div>
            </div>
            </div>

            <div className="column">
              <h2> Resources </h2>
              <div className= "ui text container">
              <a href ="https://github.com/mbhung101/SproutFront/">Frontend github link</a>
              </div>
              <div className= "ui text container">
              <a href ="https://github.com/mbhung101/SproutBack">Backend github link</a>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    )}
}
