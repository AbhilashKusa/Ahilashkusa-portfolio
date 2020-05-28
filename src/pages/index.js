import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import Layout from "../components/layout"
import "../components/layout.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)
export default IndexPage
