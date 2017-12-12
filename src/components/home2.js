import React, { Component } from 'react'
import Nav from './nav'

export default class Home2 extends Component {

  constructor(){
    super()
  }
  render(){
    return(
      <div style={{textAlign:"left"}}>
        <Nav/>
        <h2> Hello and welcome, my name is Matthew Hung, a fullstack developer </h2>
        <h3> I was tired of reading recycled responses on defunct personal websites so I built this site to present a different side of me as a potential employee.</h3>
        <br></br>
        <h3>
        Since high school, I had a real interest for science and was in and out of different molecular biology research laboratories all through college. I loved the openness of the field and learned about how creative you can actually be in pursuing your tiny personal contribution to the great scientific collective.
        However, after working outside a collegiate setting, I also learned about the frustrations, the pitfalls, limitations, formalities and glacial pace academics generally faced.
        </h3>
        <br></br>
        <h3>
        So after some thought, I decided it was time to make a life-altering change by transitioning into technology. In my lab I had learned to code writing algorithms and small programs to help with experiments and realized that code was the outlet the could alleviate all the issues I had with academics while retaining the creativity and the problem-based learning that I loved.
        It’s open and omnipresent nature and allows for someone to make amazing things in the blink of an eye. Soon after, I enrolled and finished a coding course and here I am, just beginning to scratch the surface of what I can do with the amazing technologies I have at my fingertips. I’m currently hacking away and awaiting an opporunity to join a team of talented individuals to learn with.
        </h3>
      </div>
    )
  }
}
