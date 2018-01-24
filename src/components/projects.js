import React, { Component } from 'react'
import Nav from './nav'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Projects extends Component {

  constructor(){
    super()
  }
  render(){
    return(
        <div>
        <Nav/>
        <h1> Projects </h1> <hr></hr>
        <div className="ui centered rows" style={{paddingLeft:50}}>
          <div className = "row">
            <div style={{height:450,width:500,padding:20}}>
              <Card fluid={true}>
                <a href= "/projects/sprout">
                <Image src={require('./imgs/sc1.png')} />
                </a>
                <Card.Content>
                  <Card.Header>
                    Sprout
                  </Card.Header>
                  <Card.Description>
                    Sprout is an app for anyone who grows plants. It can make a garden, save and track your vegetable harvests and compare your grows with other users.
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </div>

          <div className = "row">
            <div style={{height:350,width:500,padding:20}}>
              <Card fluid={true}>
                <a href="/projects/rats">
                <Image style={{height:250,width:400}} src={require('./imgs/rats.png')} />
                </a>
                <Card.Content>
                  <Card.Header>
                    Rats, Crime, Fire
                  </Card.Header>
                  <Card.Description>
                    Rats, Crime, Fire utilizes 311 data from New York Department of Health and Mental Hygiene to locate what gross complaints are being lodged in your neighborhood of choice.
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>

        <div className = "rows">
          <div className = "row" style={{paddingLeft:50}}>
            <div style={{height:350,width:500,padding:20}}>
              <Card fluid={true}>
                <a href="/chat">
                <Image style={{height:250,width:400}} src={require('./imgs/chat2.png')} />
                </a>
                <Card.Content>
                  <Card.Header>
                    React Chat
                  </Card.Header>
                  <Card.Description>
                    A chat application used for doctor/patient communications utilizing websockets and text message notification
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </div>

          <div className = "row">
            <div style={{height:350,width:500,padding:20}}>
              <Card fluid={true}>
                <a href="/gold">
                <Image style={{height:250,width:400}} src={require('./imgs/barrick1.png')} />
                </a>
                <Card.Content>
                  <Card.Header>
                    Barrick Test Page
                  </Card.Header>
                  <Card.Description>
                    A freelance project made with extensive CSS and customized assets, with responsive displays
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </div>

        </div>
        <div className="rows">
          <div className = "row">
            <div style={{height:350,width:500,padding:20,marginLeft:50,marginTop:50}}>
              <Card fluid={true}>
                <a href="/aero">
                <Image style={{height:250,width:400}} src={require('./imgs/graph1.png')} />
                </a>
                <Card.Content>
                  <Card.Header>
                    Aerospace Map
                  </Card.Header>
                  <Card.Description>
                    Network graph using vis js to visualize a complex dataset
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
        <br></br>




        <h1> Works in Progress </h1> <hr></hr>
        <div className = "row" style={{paddingLeft:50}}>
          <div style={{height:350,width:500,padding:30}}>
            <Card fluid={true}>
              <a href="/projects/random">
              <Image style={{height:250,width:400}} src={require('./imgs/racer.png')} />
              </a>
              <Card.Content>
                <Card.Header>
                  Random Racer
                </Card.Header>
                <Card.Description>
                  Use my bulky javascript recursion to determine a random order of given contestants
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
