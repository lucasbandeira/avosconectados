import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, linkSubscribe }) => (
  <header
    style={{
      background: 'orange',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
    <div
      style={{
        position: `absolute`,
        margin: `0 auto`,
        right: 200,
        top: 0,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLScuAFRaABYlgojSyNLPP1OhlTmj1n34KdCBi8l4Felyj84bMw/viewform"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {linkSubscribe}
          </Link>
        </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  linkSubscribe: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  linkSubscribe: ``,
}

export default Header
