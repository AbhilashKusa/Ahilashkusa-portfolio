import React, { useState, useEffect, useRef } from "react"
import BIRDS from "vanta/dist/vanta.birds.min"
import * as THREE from "three"
import scrollTo from "gatsby-plugin-smoothscroll"
import avatar from "../../images/avatar2.png"

import { TweenMax, SteppedEase } from "gsap"
const Main = props => {
  // var contact = document.getElementById("#title-contact")

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    window.THREE = THREE
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
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  function MainDetails() {
    TweenMax.to("#Main-details", 2, {
      opacity: 1,
      y: -20,
      ease: SteppedEase.easeIn,
    })
    return null
  }
  return (
    <div ref={myRef} className="Main" id="Main">
      <div className="text-white" id="Main-details" ref={MainDetails}>
        <span className="text-center">Hi, my name is</span>
        <br />
        <img src={avatar} id="main-img" />
        <h1>Abhilash Kusa</h1>
        <h1>I build things for the web.</h1>
        <button
          className="btn-secondary"
          onClick={() => scrollTo("#title-contact")}
        >
          Get In Touch
        </button>
      </div>
      <div></div>
    </div>
  )
}
export default Main
