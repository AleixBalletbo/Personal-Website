import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export default function IndexPic () {
  return (
    <StaticQuery
      query={indexPicQuery}
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
  min-width: 200px;
  box-shadow: 0 2px 4px ${props => props.theme.shadowColor};
`

const indexPicQuery = graphql`
  query indexPicQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200, quality: 100) {
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