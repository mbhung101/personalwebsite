import React, { Component } from 'react'
import Nav from './nav'

export default class Home extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div style={{textAlign:"center"}}>
        <Nav/>
        <div className="ui container">
          <p style={{fontSize:30}}> Hi, my name is Matthew Hung, a fullstack developer but also... </p>
        </div>
        <br></br>
        <div className="ui vertically divided grid">
          <div className="two column row">
            <div className="column">
              <h2> A Problem Solver </h2>
              <img src={require('./imgs/problem.jpg')} />
              <h3> I've always had a passion for solving problems; the feeling of resolving other people's problems quickly and in a cost efficient manner helps me to push through even the toughest tasks! </h3>
            </div>
            <div className="column">
              <h2> In Love With Code </h2>
              <img src={require('./imgs/nerd.jpg')} />
              <h3> I've always had a passion for code; so much so that I feel like even the most meanial of assignments will be to my liking </h3>
            </div>
          </div>
        </div>
        <div className="ui vertically divided grid">
          <div className="two column row">
            <div className="column">
              <h2> A Builder </h2>
              <img src={require('./imgs/builder.jpg')} />
              <h3> After reverse engineering the family toaster at age 3, I've always had a passion for building useful things, a basic human instinct which drives me to write amazing code today! </h3>
            </div>
            <div className="column">
              <h2> A Team Player </h2>
              <img src={require('./imgs/team.jpg')} />
              <h3> I've always had a passion for working in groups of all sizes and my unique experiences as a normal human in a functional society have taught me the best solutions are sometimes made as a unit! </h3>
            </div>
          </div>
        </div>
        <div style={{padding:15}}>
        <a style={{fontSize:50}} href="/home"> But Most Importantly </a>
        </div>
      </div>
    )
  }
}
