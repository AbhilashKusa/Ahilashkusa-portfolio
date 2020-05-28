import React, { useRef, useEffect } from "react"
import { TweenMax, Back } from "gsap"
import Aboutjpg from "./../images/Main-About.svg"
const About = () => {
  var Name = useRef(null)

  useEffect(() => {
    TweenMax.to(Name, 1.5, { y: -20, ease: Back.easeOut })
  }, [])
  return (
    <div className="section" id="About-bg">
      <div className="container ">
        <h1 className="text-lg-center ">
          <b className="p-5 font-weight-bolder" id="About-title">
            ABOUT
          </b>
        </h1>
        <div className="row">
          <div className="col-xl-8 col-10 d-flex flex-row-reverse">
            <div className="p-5">
              <p className="text-xl-justify">
                I am <b>passionate</b> about
                <b> creating web experiences that improve the lives </b>
                of those around me
              </p>
              <br />
              <p className="text-xl-justify">
                I enjoy <b> creating things that live on the internet</b>,
                whether that be
                <b> websites, applications</b>, or anything in between.
              </p>
              <p>
                My goal is to always build products that provide{" "}
                <b>pixel-perfect, performant experiences</b>.
              </p>
              <br />
              <p className="text-xl-justify">
                I Focus On<b>crafting clean</b>
                and
                <b>user-friendly experiences.</b>
              </p>
              <a href="https://abhilashkusa.netlify.app/">Quick View on my Online resume</a>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="demo-content bg-alt">
              <img
                ref={el => {
                  Name = el
                }}
                src={Aboutjpg}
                alt="About jpg"
                height="450px"
                width="450px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
