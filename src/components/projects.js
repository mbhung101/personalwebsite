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
            <div style={{height:450,width:500,padding:30}}>
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
            <div style={{height:350,width:500,padding:30}}>
              <Card fluid={true}>
                <a href="https://rcf-client.herokuapp.com/">
                <Image style={{height:250,width:400}} src={require('./imgs/rats.png')} />
                </a>
                <Card.Content>
                  <Card.Header>
                    Rats, Crime, Fire
                  </Card.Header>
                  <Card.Description>
                    Rats, Crime, Fire utilizes 311 data from New York's Department of Health and Mental Hygiene to locate what gross complaints are being lodged in your neighborhood of choice.
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </div>

        </div>

        <br></br>
        <br></br>
        <h1> Works in Progress </h1> <hr></hr>
      </div>
    )
  }
}
