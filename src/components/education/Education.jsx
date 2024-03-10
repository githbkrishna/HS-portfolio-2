import React, { useEffect } from "react";
import "./Education.css";
import ScrollReveal from "scrollreveal";

const Education = () => {

  useEffect(()=>{
    
    ScrollReveal().reveal(".box",{
      distance: '150px',
      origin: 'top',
      reset:true,
      easing:'ease-out',
      interval:300
    })
    
  },[])

  return (
    <div id="education">
      <div className="container">
        <div className="line"></div>

        <div className="certificate box">
          <div className="boxx">
            <div className="boxes">
              <h2>Certification In FullStack Java Development (2023)</h2>
              <p>NetTech India</p>
            </div>
            <div className="arrow">▶</div>
            {/* <div className="arrow">◁▷◀▶</div> */}
          </div>
        </div>

        <div className="graduation box">
          <div className="boxx">
            <div className="boxes">
              <h2>BSc IT (2023)</h2>
              <p>
                BK Birla College of Arts, Science & commerce, Kalyan (University
                Of Mumbai)
              </p>
            </div>
            <div className="arrow">◀</div>
          </div>
        </div>

        <div className="hsc box">
          <div className="boxx">
            <div className="boxes">
              <h2>HSC (2020)</h2>
              <p>
                Board of High School & Intermediate Education, Prayagraj, Uttar
                Pradesh
              </p>
            </div>
            <div className="arrow">▶</div>
          </div>
        </div>

        <div className="ssc box">
          <div className="boxx">
            <div className="boxes">
              <h2>SSC (2018)</h2>
              <p>
                Board of High School & Intermediate Education, Prayagraj, Uttar
                Pradesh
              </p>
            </div>
            <div className="arrow">◀</div>
          </div>
        </div>

        {/* <div className="graduation box">
                    <h2>BSc IT (2023)</h2>
                    <p>BK Birla College of Arts, Science & commerce, Kalyan (University Of Mumbai)</p>
                </div>
                <div className="hsc box">
                    <h2>HSC (2020)</h2>
                    <p>Board of High School & Intermediate Education, Prayagraj, Uttar Pradesh</p>
                </div>
                <div className="ssc box">
                    <h2>SSC (2018)</h2>
                    <p>Board of High School & Intermediate Education, Prayagraj, Uttar Pradesh</p>
                </div> */}
      </div>
    </div>
  );
};

export default Education;
