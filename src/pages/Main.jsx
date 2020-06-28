import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import scrollTo from "gatsby-plugin-smoothscroll";
import avatar from "./../images/avatar2.png";
import { FaAngleDoubleDown } from "react-icons/fa";
import { gsap } from "gsap";
const Main = (props) => {
  // var contact = document.getElementById("#title-contact")
  var t = gsap.timeline();
  t.from("#myname", { duration: 1, y: -20, Opacity: 0 })
    .from("#main01", {
      duration: 2,
      y: 20,
      opacity: 0,
    })
    .from("#abhilashkusa", {
      duration: 0.3,
      opacity: 0,
      y: -20,
    })
    .from("#main-button", { duration: 0.5, opacity: 0, x: -20 })
    .from("#down-arrow", {
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      y:-20,
      opacity: 0,
    });
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
          <span className="text-center pt-4" id="myname">
            Hi, my name is
          </span>
          <br />
          <img src={avatar} id="main01" className="p-2" alt="main" />
          <h1 className="pb-2 m-2" id="abhilashkusa">
            Abhilash Kusa
          </h1>
          <h1 className="pb-2" id="abhilashkusa">
            I build things for the web.
          </h1>
          <button
            className="btn-secondary m-2"
            id="main-button"
            onClick={() => scrollTo("#title-contact")}
          >
            Get In Touch
          </button>
          <div className="m-3">
            <a href="#About-bg" id="down-arrow">
              <FaAngleDoubleDown />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
