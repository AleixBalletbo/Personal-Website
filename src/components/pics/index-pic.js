import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useTheme } from "styled-components"

export default function IndexPic () {
  const theme = useTheme()
  return (
    <StaticQuery
      query={indexPicQuery}
      render={data => {
        return (
          <GatsbyImage
            image={data.avatar.childImageSharp.gatsbyImageData}
            alt={data.site.siteMetadata.author}
            imgStyle={{
              borderRadius: '50%',
            }}
            style={{
              borderRadius: '50%',
              boxShadow: '0 2px 4px ' + theme.shadowColor
            }}
          />
        )
      }}
    />  
  )
}

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