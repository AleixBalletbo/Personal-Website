import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

export default function JobPic (props) {
  return (
    <Pic
      fixed={props.image}
      alt={props.company}
    />
  )
}


const Pic = styled(Img)`
  border-radius: 50%;
  min-width: 80px;
  box-shadow: 0 2px 4px ${props => props.theme.shadowColor};
`