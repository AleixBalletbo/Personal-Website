import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export default function ProfilePic () {
  return (
    <StaticQuery
      query={profilePicQuery}
      render={data => {
        return (
          <Pic
            image={data.avatar.childImageSharp.gatsbyImageData}
            alt={data.site.siteMetadata.author}
          />
        )
      }}
    />  
  )
}

const Pic = styled(GatsbyImage)`
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
`

const profilePicQuery = graphql`
  query profilePicQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 50, height: 50, quality: 100, placeholder: BLURRED)
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`