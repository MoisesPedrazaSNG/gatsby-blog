/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css";
import '../styles/blog-theme.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main__wrapper">
      <section className="layout-header-and-content">
        <Header className="layout-header" siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="layout-content">{children}</main>
      </section>
      <footer
        style={{
          marginTop: `2rem`,
        }}
        className="layout-footer"
      >
        © {new Date().getFullYear()}, Made with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby </a>
        Carnal!
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
