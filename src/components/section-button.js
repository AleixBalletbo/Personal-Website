import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import {Link} from "gatsby"

const SectionButton = props => (
  <Link to={props.link} style={{boxShadow: '0 0 0'}}>
    <SectionButtonDiv last={props.last}>{props.children}</SectionButtonDiv>
  </Link>
)

const SectionButtonDiv = styled.div`
    background-color: ${props => props.theme.accentColor};
    border-radius: 2em;
    height: 15em;
    width: 15em;
    @media (max-width: 800px) {
      border-radius: 1em;
      height: auto;
      width: 100%;
      margin-bottom: ${props => props.last ? 0 : rhythm(1 / 2) };
      padding-top: 30%;
    }
`

export default SectionButton