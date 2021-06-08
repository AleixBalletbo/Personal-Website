import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {rhythm, scale} from "../utils/typography"

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
          <Greetings>Hi there! 😁 </Greetings>
          <p>Welcome to my personal website.</p>
        </TextContainer>
        <ButtonsContainer>
          <SectionArea>
            <SectionButton link="/blog/"/>
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
  @media (min-height: 736px) and (min-width: 801px) {
    position: absolute;
  }
  color: ${props => props.theme.quaternaryColor};
`

const Greetings = styled.h3`
  color: ${props => props.theme.tertiaryColor};
  margin-top: ${rhythm(3/4)};
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
