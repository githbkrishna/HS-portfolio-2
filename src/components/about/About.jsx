import React, { useEffect } from 'react'
import './about.css'
import ScrollReveal from 'scrollreveal'
import about from '../../assets/idea.png'

const About = () => {

  useEffect(()=>{

    ScrollReveal().reveal(".aboutcont",{
      reset:true,
      origin:"right",
      distance:"20px",
      scale:0.9,
    })

  },[])

  return (
    <div id='about'>
      <div className="aboutimg">
        <img src={about} alt="" />
      </div>
      <div className="aboutcont">
        <h1>hii there,</h1>
        <h2 className='h2'>this is Hariom Singh <br />Frontend Developer</h2>
        <h3>I am a Frontend developer based in Mumbai, India. I am BSc It graduate from BK Birla College. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using React. Working for myself to improve my skills.</h3>
      </div>
    </div>
  )
}

export default About