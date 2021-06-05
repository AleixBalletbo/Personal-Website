/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import ProfilePic from "./profile-pic.js"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, aboutMe } = data.site.siteMetadata
        return (
          <Container>
            <ProfilePic/>
            <div>
              <Title>
                Written by <strong>{author}</strong>
              </Title>
              <Description>
                {aboutMe}
              </Description>
              <SocialMediaLink href={`https://twitter.com/${social.twitter}`}>
                <SocialMediaImage src="/Twitter-logo.svg" alt="Aleix Balletbó's Twitter Profile"/>
              </SocialMediaLink>
              <SocialMediaLink href={`https://dev.to/${social.devto}`}>
                <SocialMediaImage src="/DEV-logo.svg" alt="Aleix Balletbó's DEV Profile"/>
              </SocialMediaLink>
              <SocialMediaLink href={`https://github.com/${social.github}`}>
                <SocialMediaImage src="/GitHub-logo.svg" alt="Aleix Balletbó's GitHub Profile"/>
              </SocialMediaLink>
            </div>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
          devto
          github
        }
        aboutMe
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.primaryColor};
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
  display: block;
  padding-bottom: 5px;
  color: ${props => props.theme.tertiaryColor};
`

const Description = styled.span`
  display: block;
  padding-bottom: 5px;
  color: ${props => props.theme.tertiaryColor};
  font-size: 80%;
`
const SocialMediaLink = styled.a`
  box-shadow: none;
  text-decoration: none;
  float: left;
  margin-right: 10px;
`

const SocialMediaImage = styled.img`
  margin: 0;
  height: 29px;
  width: 25px;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.15, 1.15);
  }
`

export default Bio
