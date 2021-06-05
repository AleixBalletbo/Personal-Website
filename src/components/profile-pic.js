import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function ProfilePic () {
  return (
    <StaticQuery
      query={profilePicQuery}
      render={data => {
        return (
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={data.site.siteMetadata.author}
            style={{
              marginRight: 10+'px',
              marginBottom: 0,
              minWidth: 100,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
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
        fixed(width: 100, height: 100) {
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