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
        <TextContainer>
          <h3>Hi there! 😁 </h3>
          <p>Welcome to my personal website.</p>
        </TextContainer>
        <ButtonsContainer>
          <SectionArea>
            <SectionButton/>
            <SectionButton/>
            <SectionButton/>
          </SectionArea>
        </ButtonsContainer>
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

const TextContainer = styled.div`
  @media (max-width: 800px) {
    position: relative;
  }
  position: absolute;
`

const ButtonsContainer = styled.div`
  @media (max-width: 800px) {
    margin-top: 0;
    margin-bottom: 0;
  }
  margin-top: auto;
  margin-bottom: auto;
`

export default IndexPage
