import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <Seo title="Home" />
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Hi, My name is Gerald!
      </h1>
      <p>I like to play games because I am a GAMER.</p>
      <p>Bask in my NEVERENDING GAMER GLORY PEASENTS.</p>
      <div
        css={css`
          margin-bottom: 1.45rem;
        `}
      >
        <StaticImage
          src="../images/gerald.jpg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Gerald"
        />
      </div>
      <p>
        <Link to="/Dragon-City/">Go to Dragon CITY</Link> <br />
        <Link to="/Gerald-and-wife/">Go to Gerald and Wife</Link>
      </p>
    </div>
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
