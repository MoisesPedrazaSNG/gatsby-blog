import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>This is the powerfull Third page</h1>
    <p>Horray this seems to work</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
