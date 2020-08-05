/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, aboutMe } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: 10+'px',
                marginBottom: 0,
                minWidth: 100,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
                borderWidth: 3 + 'px',
                borderColor: 'rgb(64, 64, 64)',
                borderStyle: 'solid'
              }}
            />
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
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
  //background-image: linear-gradient(90deg, rgb(77, 166, 255), rgb(179, 128, 255));
  background-color: lightgray;
  padding: 10px;
  border-radius: 10px;
  border-width: 3px;
  border-color: rgb(64, 64, 64);
  border-style: solid;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
  display: block;
  padding-bottom: 5px;
`

const Description = styled.span`
  display: block;
  padding-bottom: 5px;
  color: rgb(64, 64, 64);
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
