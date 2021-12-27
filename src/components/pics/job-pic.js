import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export default function JobPic (props) {
  return (
    <Pic
      image={props.image}
      alt={props.company}
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