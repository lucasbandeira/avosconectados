import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BannerMain from "../components/banner"

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: `800px`, marginTop: `1.45rem`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
