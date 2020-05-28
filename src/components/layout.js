/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Nav from "./Reusable/Nav"
import Main from "./Reusable/Main"
import About from "../pages/About"
import MyRecentWork from "../pages/MyRecentWork"
import Skills from "../pages/Skills"
import Intrests from "../pages/Intrests"
import Contact from "../pages/Contact"
import Footer from "../pages/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <MyRecentWork />
      <Skills />
      <Intrests />
      <main> {children} </main>
      <Contact />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
