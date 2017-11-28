import React, { Component } from 'react'
import Nav from './nav'

export default class Resume extends Component {

  render(){
    return(
    <div>
      <Nav/>
      <h2> Comfortable With </h2>
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

      <div className="rows">

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/jq.gif')} />
            <div className="overlay">
              <div className="overlayText">JQuery</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/pg.png')} />
            <div className="overlay">
              <div className="overlayText">Postgres</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/redux.png')} />
            <div className="overlay">
              <div className="overlayText">Redux</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/sin.png')} />
            <div className="overlay">
              <div className="overlayText">Sinatra</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/ajax-logo.png')} />
            <div className="overlay">
              <div className="overlayText">Ajax</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/heroku.jpg')} />
            <div className="overlay">
              <div className="overlayText">Heroku</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/node.jpg')} />
            <div className="overlay">
              <div className="overlayText">Node JS</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="resumeContainer" style={{height:150,width:150,padding:10}}>
            <img className="resumeImage" style={{height:150,width:150,padding:10}} src={require('./imgs/socket.png')} />
            <div className="overlay">
              <div className="overlayText">Socket IO</div>
            </div>
          </div>
        </div>

      </div>

      <h2> Education </h2>
      <hr></hr>
      <br></br>
      <div style={{display:"inline-block",padding:15}}>
        <img style={{height:200,width:300}} src={require('./imgs/flatiron_gif.gif')} />
      </div>
      <div className="ehBox" style={{display:"inline-block",paddingLeft:15, paddingTop:50}}>
         <font size="5"> 040317 "Full Metal Brackets" Cohort </font>
         <br></br>
         Software Engineer Immersive Program
         <hr></hr>
         <ul>
          <li> Learned popular web technologies in intensive and selective 15 week program </li>
          <li> Accelerated curriculum instilled rapid acclimatization to new languages and new technologies </li>
          <li> Emphasis on deadlined, low oversight, collaborative projects  </li>
         </ul>
      </div>

      <div style={{display:"inline-block",padding:15}}>
        <img style={{height:200,width:300}} src={require('./imgs/uwm2.jpg')} />
      </div>
      <div className="ehBox" style={{display:"inline-block",paddingLeft:15, paddingTop:50}}>
         <font size="5">  Class of 2014 </font>
         <br></br>
         Degree in Medical Microbiology/ Immunology
         <hr></hr>
         <ul>
          <li> 4-year Bachelor of Science program with focus on diseases and clinical diagnosis </li>
          <li> Broad cousrework at renowned institute including math, phsyical science, literature, philosophy and ethnic studies </li>
          <li> Rich academic culture where immersion in differing ideas, perspectives and personalities is paramount </li>
         </ul>
      </div>

      <h2> Employment History </h2>
      <hr></hr>

      <div style={{display:"inline-block",padding:50}}>
        <img style={{height:250,width:250}} src={require('./imgs/mts.jpg')} />
      </div>
      <div className="ehBox" style={{display:"inline-block",paddingLeft:5, paddingTop:75}}>
         <font size="5">  Soriano Lab - Associate Researcher </font>
         <br></br>
         July 2015 - July 2016
         <hr></hr>
         <ul>
          <li> Worked in prestigous developmental biology lab to assist ongoing skull formation research </li>
          <li> Designed and perfomred molcular biology experiments and genotyping database</li>
          <li> Managed mouse colony, genetic standards, bacterial media, laboratory stocks, machinery</li>
          <li> Attended seminars, defenses and presentations discussing and analyzing cutting-edge research</li>
          <li> Wrote custom alogrithms and visualization tools to aid in day to day experimentation </li>
         </ul>
      </div>

      <div style={{display:"inline-block",padding:20}}>
        <img style={{height:200,width:300}} src={require('./imgs/mmi.jpeg')} />
      </div>
      <div className="ehBox" style={{display:"inline-block",paddingLeft:10, paddingTop:60}}>
         <font size="5">  Ruby/Goodrich-Blair Lab - Undergraduate Researcher </font>
         <br></br>
         July 2012 - August 2014
         <hr></hr>
         <ul>
          <li> Worked in 2 separate laboratories assisting graduate students studying bacterial interactions</li>
          <li> Designed and perfomred molcular biology experiments under minimal supervision</li>
          <li> Managed squid colony and learned/performed basic molecular techniques</li>
         </ul>
      </div>

    </div>
    )
  }
}
