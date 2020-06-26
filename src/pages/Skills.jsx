import React from "react";
import JavaScript from "../images/Skills/JavaScript.svg";
import HTML from "../images/Skills/HTML.svg";
import Css from "../images/Skills/Css.svg";
import Ract from "../images/Skills/React.svg";
import Bootstrap from "../images/Skills/bootstrap.png";
import tailwind from "../images/Skills/tailwind.png";
import Npm from "../images/Skills/Npm.svg";
import sass from "../images/Skills/sass.svg";

const Skills = () => {
  return (
    <div className="" id="main-skills">
      <div className="container">
        <h2 className="text-center text-uppercase text-white" id="Skills-title">
          <b>My Tools!</b>
        </h2>
        <div className="" id="MY-Tools">
          <div>
            {" "}
            <img src={HTML} alt="HTML" height="48" width="48" />
            <p className="text-white">{"  "}HTML5</p>
          </div>
          <div>
            {" "}
            <img src={Css} alt="Css" height="48" width="48" />
            <p className="text-white">{"  "}CSS3</p>
          </div>
          <div>
            <img src={JavaScript} alt="JavaScript" height="48" width="48" />
            <p className="text-white">JavaScript</p>
          </div>
          <div>
            <img src={Bootstrap} alt="Bootstrap" height="48" width="48" />
            <p className="text-white">{"  "}Bootstrap</p>
          </div>
          <div>
            <img src={Ract} alt="React" height="48" width="48" />
            <p className="text-white">{"  "}React JS</p>
          </div>

          <div>
            <img src={tailwind} alt="tailwind" height="48" width="48" />
            <p className="text-white">TAILWIND</p>
          </div>
          <div>
            <img src={Npm} alt="Npm" height="48" width="48" />
            <p className="text-white">
              <b>{"  "}NPM</b>
            </p>
          </div>
          <div>
            <img src={sass} alt="sass" height="48" width="48" />
            <p className="text-white">{"  "}SASS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
