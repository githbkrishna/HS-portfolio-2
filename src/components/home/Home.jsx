import React, { useEffect } from 'react'
import home from '../../assets/home.png'
import "../style.css";
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'

const Home = () => {

  // for typed.js  
  useEffect(() => {
    const typed = new Typed(".type", {
      strings: ['<span style="color:blue">Frontend Developer</span>', '<span style="color:cyan">React Developer</span>',  '<span style="color:deeppink">&amp; Web Developer.</span>'],
      typeSpeed: 50,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      backSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  });

  // for ScrollReveal()
  useEffect(()=>{

    const slideleft = {
      reset:true,
      origin:"left",
      distance:"90px",
      easing:"ease-in-out",
    }

    ScrollReveal().reveal(".homecont", slideleft)

  },[])

  return (
    <section>
        <div className='homecont'>
          <h1>Hi, My name is</h1>
          <h1 className='h2'>Hariom,</h1>
          <h1>and I am a passionate</h1>
          <span className='type'></span>
          
          <br />
          <button>
            <a href="">about me <i class="fa-solid fa-arrow-down"></i></a>
          </button>
          <div>
            <span><a href="mailto:krishna636471@gmail.com"><i class="fa-solid fa-envelope"></i></a></span>
            <span><a href="https://github.com/githbkrishna" target='blank'><i class="fa-brands fa-github"></i></a></span>
            <span><a href="https://www.linkdin.com/in/hariomsingh97?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><i class="fa-brands fa-linkedin"></i></a></span>
          </div>

        </div>
        <div className='homeimg'>
          <img src={home} alt="" />
        </div>
    </section>
  )
}

export default Home