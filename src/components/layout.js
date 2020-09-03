import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import BannerMain from './banner'
import './layout.css'

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle="À Vós Conectados" />
      <BannerMain />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
