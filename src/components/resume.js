import React, { Component } from 'react'
import Nav from './nav'

export default class Resume extends Component {

  render(){
    return(
    <div>
      <Nav/>
      <h2> Comfortable With: </h2>
      <hr></hr>

      <div className="rows">

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/react.svg')} />
            <div className="overlay">
              <div className="overlayText">React</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/js.png')} />
            <div className="overlay">
              <div className="overlayText">Javascript</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/html.png')} />
            <div className="overlay">
              <div className="overlayText">HTML 5</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/rr.png')} />
            <div className="overlay">
              <div className="overlayText">Ruby on Rails</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/css1.png')} />
            <div className="overlay">
              <div className="overlayText">CSS 3</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/SQL1.png')} />
            <div className="overlay">
              <div className="overlayText">SQL</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/git.png')} />
            <div className="overlay">
              <div className="overlayText">Git</div>
            </div>
          </div>
        </div>

      </div>

    </div>
    )
  }
}
