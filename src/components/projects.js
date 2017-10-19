import React, { Component } from 'react'
import Nav from './nav'

export default class Projects extends Component {

  constructor(){
    super()
  }
  render(){
    return(
        <div>
        <Nav/>
        <h1 align="center"> Sprout </h1>
        <hr></hr>
        <div className="ui text container">
          <font size="4"> Sprout is an app for anyone who grows plants! It can make a garden, save and track your vegetable harvests and compare your grows with other users.</font>
        </div>
        <br></br>
        <div align="center">
          <img style={{width:900,height:500}} src={require('./imgs/sc1.png')} />
        </div>
        <br></br>
        <div  className="ui text container">
          <font size="4"> A user profile contains changeable basic information and profile picture. From the home page, they can utilize the one of many the built in functionalities, like alerts and weather forecaster. </font>
        </div>
        <br></br>
        <div align="center">
          <img style={{width:900,height:500}} src={require('./imgs/sc2.png')} />
        </div>
        <br></br>
        <div  className="ui text container">
          <font size="4"> Users can search for a the conditions of vegetables grown by others and accompanying data for when they harvested them to see when to expect thiers or get ideas on how to improve the next batch!  </font>
        </div>
        <br></br>
        <div align="center">
          <img style={{width:900,height:500}} src={require('./imgs/sc3.png')} />
        </div>
        <br></br>
        <div  className="ui text container">
          <font size="4"> Check what fruits and veggies are being harvested this time of year and compare two vegetable conditions to turn your backyard into a science lab  </font>
        </div>
        <a href= "https://github.com/mbhung101/SproutFront"> Frontend Link </a>
        <br></br>
        <a href= "https://github.com/mbhung101/SproutBack"> Backend Link </a>
        <br></br>
      </div>
    )
  }
}
