import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import scrollTo from "gatsby-plugin-smoothscroll";
import avatar from "./../images/avatar2.png";
// import { FaAngleDoubleDown } from "react-icons/fa";
const Main = (props) => {
  // var contact = document.getElementById("#title-contact")

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    window.THREE = THREE;
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          quantity: 3.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} className="Main" id="Main">
      <div className="container">
        <div className="text-white" id="Main-details">
          <span className="text-center pt-5 pb-2">Hi, my name is</span>
          <br />
          <img src={avatar} id="main01" className="p-2" alt="main" />
          <h1 className="pb-2 m-2">Abhilash Kusa</h1>
          <h1 className="pb-2">I build things for the web.</h1>
          <button
            className="btn-secondary m-2"
            id="main-button"
            onClick={() => scrollTo("#title-contact")}
          >
            Get In Touch
          </button>
          <div className="m-4">
            <a href="#About-bg" id="down-arrow">
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
