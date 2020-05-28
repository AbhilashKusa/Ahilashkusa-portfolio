import React from "react"
import Aboutjpg from "./../images/Aboutme.jpg"

const Intrests = () => {
  return (
    <div className="section" id="Intrests-bg">
      <div className="container m-auto ">
        <h1 className="text-lg-center ">
          <b className="m-5 font-weight-bolder" id="Intrests-title">
            Intrests
          </b>
        </h1>
        <div className="row">
          <div className="col-xl-4">
            <div className="demo-content bg-alt">
              <img
                src={Aboutjpg}
                alt="About jpg"
                height="350px"
                width="350px"
              />
            </div>
          </div>
          <div className="col-xl-8 ">
            <div className="p-5">
              <p className="text-xl-justify ">
                I am a <b>tech enthusiast</b> and spend a large amount of my
                free time exploring the <b>latest tech</b> advancements in the
                front-end web development world.{" "}
                <b>I Love Open Source Software</b>
              </p>
              <p className="text-xl-justify ">
                A Part form web development i love Gaming and I paly lots of PC
                games, and <b>i love to Capture things.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Intrests
