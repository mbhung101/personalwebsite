import React, { Component } from 'react'
import Nav from './nav'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class Fun extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <Nav/>
        <h1> Reviews </h1>
        <h2>Music</h2>
        <div className = "rows">
        <div className = "row">
        <div style={{height:250,width:250,padding:10}}>
          <Card fluid={true}>
            <a href= "https://www.sputnikmusic.com/review/66494/Courtney-Barnett-sometimes-i-sit-and-think-and-sometimes-i-just-sit/">
            <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Courtney_Barnett_Sometimes_I_Think.jpg/220px-Courtney_Barnett_Sometimes_I_Think.jpg" />
            </a>
            <Card.Content>
              <Card.Header>
                Courtney Barnett - sometimes i sit and think, and sometimes i just sit
              </Card.Header>
            </Card.Content>
          </Card>
        </div>
        </div>
        <div className = "row">
        <div style={{height:250,width:250,padding:10}}>
          <Card fluid={true}>
            <a href= "https://www.sputnikmusic.com/review/66809/Alabama-Shakes-Sound--Color/">
            <Image src="https://images-na.ssl-images-amazon.com/images/I/511Lt1IJgHL.jpg" />
            </a>
            <Card.Content>
              <Card.Header>
                Alabama Shakes - Sound and Color
              </Card.Header>
            </Card.Content>
          </Card>
        </div>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h2>Games</h2>
        <div className="rows">
        <div className="row">
        <div style={{height:250,width:250,padding:10}}>
          <Card fluid={true}>
            <a href= "https://www.gamespew.com/2016/05/warhammer-total-war-review/">
            <Image src="https://orig00.deviantart.net/35b6/f/2016/075/e/f/total_war_warhammer_png_icon_by_s7_by_sidyseven-d9vbxwx.png" />
            </a>
            <Card.Content>
              <Card.Header>
                Total Warhammer
              </Card.Header>
            </Card.Content>
          </Card>
        </div>
        </div>
        <div className = "row">
        <div style={{height:250,width:250,padding:10}}>
        <Card fluid={true}>
          <a href= "https://www.gamespew.com/2016/07/necropolis-review/">
          <Image src="https://cdn0.vox-cdn.com/hermano/medium/10670/medium_necropolis_logo.png" />
          </a>
          <Card.Content>
            <Card.Header>
              Necropolis
            </Card.Header>
          </Card.Content>
        </Card>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
