import React, { useEffect, useState } from 'react'
import logoo from '../assets/new.png'
import "./style.css";
import ScrollReveal from 'scrollreveal'

function Nav() {

  useEffect(()=>{

    const logoup = {
      reset:true,
      origin: 'left',
      distance: '50px',
      easing:"ease-in-out",
      // scale:1.3,
    }

    ScrollReveal().reveal(".logo", logoup)
    
  },[])

  const [ham, setham] = useState(true)



  // const [showNavbar, setShowNavbar] = useState(false);
  // const handleShowNavbar = () => {
  //   setShowNavbar(!showNavbar);
  // };


  return (
    <nav>
      <div className="logo">
        <img src={logoo} alt="" />
      </div>

      <div className="ham" onClick={()=>setham(!ham)}>
        {
          ham ?
          <i class="fa-solid fa-bars"></i>
          :
          <i class="fa-solid fa-xmark"></i>
        }
      </div>

      <ul className={ham ? "menuopen menu" : "menu"}>
        <li><a href="/">Home</a></li>
        {/* <li><a href="#about">About</a></li> */}
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  )
}

export default Nav