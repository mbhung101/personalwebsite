import React, { Component } from 'react'
import Nav from './nav'
export default class Gold extends Component {

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
              <img src={require('./imgs/barrick1.png')}/>
            </div>

            <div className="column">
              <h2> Barrick Test Page</h2>
              <hr></hr>
              <div>
              A custom CSS-heavy sample landing page I did as a freelance project, utilizing custom asssets and responsive layouts for mobile and high resolution Retina displays.
              Built to scrict customer specifications and layouts. Layouts for tablet/other devices and Wordpress integration in progress.
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
                <div role="listitem" className="item">Heavy CSS designs</div>
                <div role="listitem" className="item">Responsive mobile layouts</div>
                <div role="listitem" className="item"> Built to exact customer specifications</div>
              </div>
            </div>
            </div>

            <div className="column">
              <h2> Resources </h2>
              <div className= "ui text container">
              <a href ="https://github.com/mbhung101/gold">Frontend github link</a>
              </div>
              <div className= "ui text container">
              <a href ="https://barricktest.herokuapp.com/">Heroku link</a>
              </div>
            </div>
          </div>

        </div>
        </div>

      </div>
    )}
}
