import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* You'll never need to add your own "<body></body>" tags in a Gatsby site. 
    If you inspect the HTML on one of your Gatsby pages, you'll see that
    Gatsby takes care of wrapping it for you. 

    Also, due to reponsive design, it's almost never a good idea to hard-code
    a pixel height, because it means that element won't expand vertically 
    even if it runs out of room. That's what was causing your header to appear 
    so far down the page, off screen. Instead, you should set "min-height" or 
    "max-height" with a height of 100% */}
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
      {/* It looks like you were having trouble adding a margin bottom to
      the image. This is because the StaticImage component generates a wrapper
      with absolute position styling on it. 

      If you want to add spacing styling to a Gatsby image, 
      you should add a wrapping div and apply it to that instead. */}
      <div
        css={css`
          margin-bottom: 1.45rem;
        `}
      >
        {/* Good use of the StaticImage component here.
        I've just removed the "formats" prop because it's 
        optional and the defaults are good. */}
        <StaticImage
          src="../images/gerald.jpg"
          width={300}
          quality={95}
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
