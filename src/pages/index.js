import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {rhythm, scale} from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexPic from "../components/pics/index-pic"
import BlogSummary from "../components/blog/blog-summary"
import ProjectsSummary from "../components/projects/projects-summary"

import TwitterLogoImage from "../../static/svg/Twitter-logo.svg"
import DevLogoImage from "../../static/svg/DEV-logo.svg"
import GitHubLogoImage from "../../static/svg/GitHub-logo.svg"
import LinkedinLogoImage from "../../static/svg/Linkedin-logo.svg"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const social = data.site.siteMetadata.social
    return (
      <Layout location={this.props.location} title={siteTitle} header="index">
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <IntroContainer>
          <IntroHeader>
            <Name>Aleix Balletbó</Name>
            <Briefing>Software & data engineer and technology enthusiast</Briefing>
            <SocialLinksContainer>
              <SocialLink href={`https://twitter.com/${social.twitter}`}>
                <TwitterLogo/>
              </SocialLink>
              <SocialLink href={`https://dev.to/${social.devto}`}>
                <DevLogo/>
              </SocialLink>
              <SocialLink href={`https://github.com/${social.github}`}>
                <GitHubLogo/>
              </SocialLink>
              <SocialLink href={`https://www.linkedin.com/in/${social.linkedin}`}>
                <LinkedinLogo/>
              </SocialLink>
            </SocialLinksContainer>
          </IntroHeader>
          <IndexPicContainer>
            <IndexPic/>
          </IndexPicContainer>
        </IntroContainer>

        <Abstract>
          Hi there 👋! I'm Aleix Balletbó, welcome to my personal corner of the internet!
        </Abstract>
        <Abstract>
          I'm passionate about software engineering, and I'm currently specialized in Big Data technologies.
          Here you will find a personal blog with my thoughts and learnings, as well as a collection of my personal projects and my professional path.
        </Abstract>

        <SummaryContainer>
          <BlogSummary/>
          <ProjectsSummary/>
        </SummaryContainer>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          devto
          github
          linkedin
        }
      }
    }
  }
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  margin-bottom: ${rhythm(1 / 2)};
`

const IntroHeader = styled.div`
  flex: 1;
`

const Name = styled.h1`
  white-space: nowrap;
  color: ${props => props.theme.accentColor};
  margin-top: ${rhythm(1 / 2)};
  margin-bottom: 0;
`

const Briefing = styled.h3`
  margin-top: ${rhythm(3 / 4)};
  margin-bottom: ${rhythm(3 / 4)};
  color: ${props => props.theme.tertiaryColor};
`

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SocialLink = styled.a`
  box-shadow: none;
  text-decoration: none;
  margin-right: ${rhythm(1 / 2)};
`

const TwitterLogo = styled(TwitterLogoImage)`
  margin: 0;
  height: 40px;
  width: 34px;
  fill: ${props => props.theme.tertiaryColor};
`

const DevLogo = styled(DevLogoImage)`
  margin: 0;
  height: 40px;
  width: 34px;
  fill: ${props => props.theme.tertiaryColor};
`

const GitHubLogo = styled(GitHubLogoImage)`
  margin: 0;
  height: 40px;
  width: 34px;
  fill: ${props => props.theme.tertiaryColor};
`

const LinkedinLogo = styled(LinkedinLogoImage)`
  margin: 0;
  height: 40px;
  width: 34px;
  fill: ${props => props.theme.tertiaryColor};
`

const IndexPicContainer = styled.div`
  align-self: center;
  margin-top: ${rhythm(1 / 4)};
`

const Abstract = styled.p`
  margin-bottom: ${rhythm(1 / 4)};
  color: ${props => props.theme.quaternaryColor};
`

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${rhythm(3 / 4)} ${rhythm(-3 / 8)} 0 ${rhythm(-3 / 8)};
  @media (max-width: 800px) {
    margin: ${rhythm(1 / 2)} ${rhythm(-1 / 4)} 0 ${rhythm(-1 / 4)};
  }
`

export default IndexPage
