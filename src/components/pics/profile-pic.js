import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ProfilePic () {
  return (
    <StaticQuery
      query={profilePicQuery}
      render={data => {
        return (
          <GatsbyImage
            image={data.avatar.childImageSharp.gatsbyImageData}
            alt={data.site.siteMetadata.author}
            imgStyle={{
              borderRadius: '50%'
            }}
          />
        )
      }}
    />  
  )
}

const profilePicQuery = graphql`
  query profilePicQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 50, height: 50, quality: 100)
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`