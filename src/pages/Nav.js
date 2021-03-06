import React, { useState } from "react";
import { Link } from "gatsby";
import { MdFace } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { GiLoveMystery, GiHamburgerMenu } from "react-icons/gi";
import { RiCodeLine } from "react-icons/ri";
import scrollTo from "gatsby-plugin-smoothscroll";

const Nav = () => {
  const About = (e) => {
    e.preventDefault();
    scrollTo("#About-bg");
  };
  const Projects = (e) => {
    e.preventDefault();
    scrollTo("#myrecentwork");
  };
  const Skills = (e) => {
    e.preventDefault();
    scrollTo("#main-skills");
  };
  const Intrests = (e) => {
    e.preventDefault();
    scrollTo("#Intrests-bg");
  };

  const [Nav, SetNav] = useState({
    navbarState: false,
    navBarClass: "collapse navbar-collapse",
  });
  const OnToggle = () => {
    Nav.navbarState
      ? SetNav({
          navbarState: false,
          navBarClass: "collapse navbar-collapse",
        })
      : SetNav({
          navbarState: true,
          navBarClass: "collapse navbar-collapse show",
        });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand">
          <h3 id="name">Ak</h3>
        </Link>
        <button className="navbar-toggler" type="button" onClick={OnToggle}>
          <GiHamburgerMenu />
        </button>
        <div className={Nav.navBarClass}>
          <ul className="navbar-nav ml-auto " id="unOrderList">
            <li className="nav-item">
              <a href="/" className="nav-link text-white" onClick={About}>
                <MdFace /> About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#projects"
                className="nav-link text-white"
                onClick={Projects}
              >
                <BsCodeSlash /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white" onClick={Skills}>
                <RiCodeLine /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Intrests-bg"
                className="nav-link text-white"
                onClick={Intrests}
              >
                <GiLoveMystery />
                Intrests
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
