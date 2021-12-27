import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export default function IndexPic () {
  return (
    <StaticQuery
      query={indexPicQuery}
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
  box-shadow: 0 2px 4px ${props => props.theme.shadowColor};
  img {
    border-radius: 50%;
  }
`

const indexPicQuery = graphql`
  query indexPicQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 200, height: 200, quality: 100)
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`