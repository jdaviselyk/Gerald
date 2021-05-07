/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/react"

import Header from "./header"
import "./layout.css"

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
    <>
      {/* Any good styling library will come with a way to make Global styles.
      Here's how we do it in @emotion, but it's similar with Styled Components too.
      You import the provided "Global" component and write CSS in the "styles" prop that it expects.
      Notice it's "styles" versus the "style" prop we put on normal html elements. 
      They just happen to be named similarly. (This is one reason i prefer Styled Components) 
      Here's a concise article about how to do it in Styled Components
      */}
      <Global
        styles={css`
          a {
            color: goldenrod;
          }

          .container {
            width: 100%;
            max-width: 65em;
            margin: 0 auto;
            display: block;
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata?.title} />
      <div>
        <main>{children}</main>
        <footer
          css={css`
            margin-top: 2rem;
          `}
        >
          <div className="container">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
