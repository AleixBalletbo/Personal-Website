import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useTheme } from "styled-components"

export default function JobPic (props) {
  const theme = useTheme()
  return (
    <GatsbyImage
      image={props.image}
      alt={props.company}
      imgStyle={{
        borderRadius: '50%',
      }}
      style={{
        borderRadius: '50%',
        boxShadow: '0 2px 4px ' + theme.shadowColor
      }}
    />
  )
}