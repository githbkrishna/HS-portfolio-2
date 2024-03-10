import React, { useEffect } from "react";
// import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import "./Skills.css";
import ScrollReveal from "scrollreveal";

const Skills = () => {

  const skilldata = [
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "jQuery",
      icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png",
    },
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      name: "MaterialUI",
      icon: "https://img.icons8.com/color/48/000000/material-ui.png",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "Git VCS",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
    },
    {
      name: "Netlify",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },
  ];
  // console.log(skilldata);

  useEffect(()=>{
    
    ScrollReveal().reveal(".skillbox",{
      distance: '50px',
      origin: 'top',
      reset:true,
      scale:1.2,
      easing:'ease-in-out',
      delay:100,
      interval:100
    })

  },[])

  return (
    <div id="skills">
      <div className="skilcont">
        {
          skilldata.map((val)=>{
            return(
              <div className="skillbox">
                <div><img src={val.icon} alt="" /></div>
                <div>{val.name}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Skills;
