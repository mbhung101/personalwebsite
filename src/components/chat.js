import React, { Component } from 'react'
import Nav from './nav'

export default class Chat extends Component {

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
              <img src={require('./imgs/chat2.png')}/>
            </div>

            <div className="column">
              <h2> React Chat </h2>
              <hr></hr>
              <div>
              React chat allows for instant communication between patient and caregiver.
              The app distinguishes between clinician and patient during login and allows both to simply manage multiples conversations.
              Chatrooms are updated in realtime and sends text notifications to offline users via text message.
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
                <div role="listitem" className="item">Ruby on Rails Backend</div>
                <div role="listitem" className="item"> Websocket intergration (Socket IO)</div>
                <div role="listitem" className="item">Twilio text notifications</div>
              </div>
            </div>
            </div>

            <div className="column">
              <h2> Resources </h2>
              <div className= "ui text container">
               <a href ="https://github.com/mbhung101/pwa-chat">Frontend github link</a>
              </div>
              <div className= "ui text container">
              <a href = "https://github.com/mbhung101/pwa-back">Backend github link</a>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    )
  }
}
