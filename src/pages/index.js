import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <body
      css={css`
        width: auto;
        height: 2000px;
        brgba(66, 27, 27, 0.8))): fixed;
        color: white;
      `}
    >
      <Seo title="Home" />
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
          text-color: white;
        `}
      >
        Hi, My name is Gerald!
      </h1>
      <p>I like to play games because I am a GAMER.</p>
      <p>Bask in my NEVERENDING GAMER GLORY PEASENTS.</p>
      <StaticImage
        src="../images/gerald.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Geraldt"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/Dragon-City/">Go to Dragon CITY</Link> <br />
        <Link to="/Gerald-and-wife/">Go to Gerald and Wife</Link>
      </p>
    </body>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
