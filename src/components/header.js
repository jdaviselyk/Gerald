import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      padding: 1rem 0;
      margin-bottom: 2rem;
      background-color: rebeccapurple;
    `}
  >
    {/* Here I'm using a global container class 
    to wrap our content and constrain the width */}
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
