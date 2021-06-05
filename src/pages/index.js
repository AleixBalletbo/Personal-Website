import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import SectionArea from "../components/section-area"
import SectionButton from "../components/section-button"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Intro>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </Intro>
        <SectionArea>
          <SectionButton/>
          <SectionButton/>
          <SectionButton/>
        </SectionArea>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: {regex: "/profile.jpg/"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Intro = styled.h3`
  margin-top: 0;
`

export default IndexPage
