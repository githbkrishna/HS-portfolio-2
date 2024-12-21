import React from 'react'
import "./style.css";

const Footer = () => {
  return (
    <footer>
        <div className="foots">
            <div className="foot">
                <h2>Hariom's</h2>
                <h2>web developer portfolio</h2>
            </div>
            <div className="foot">
                <h2>#Quick Links</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="foot">
                <h2>Social</h2>
                <ul className='social'>
                    <li><a href="mailto:krishna636471@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href="https://www.linkdin.com/in/hariomsingh97?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/githbkrishna" target='blank'><i class="fa-brands fa-github"></i></a></li>
                </ul>
            </div>
        </div>
        <h1>Created with 🧡 by Hariom</h1>
    </footer>
  )
}

export default Footer