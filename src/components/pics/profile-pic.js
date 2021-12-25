import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export default function ProfilePic () {
  return (
    <StaticQuery
      query={profilePicQuery}
      render={data => {
        return (
          <Pic
            fixed={data.avatar.childImageSharp.fixed}
            alt={data.site.siteMetadata.author}
            imgStyle={{
              marginBottom: 0
            }}
          />
        )
      }}
    />  
  )
}

const Pic = styled(Img)`
  border-radius: 50%;
`

const profilePicQuery = graphql`
  query profilePicQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`