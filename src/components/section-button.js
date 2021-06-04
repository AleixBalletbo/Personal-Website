import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const SectionButton = props => (
  <SectionButtonDiv props={props}>{props.children}</SectionButtonDiv>
)

const SectionButtonDiv = styled.div`
    background-color: ${props => props.theme.accentColor};
    border-radius: 10px;
    height: 15em;
    width: 15em;
    @media (max-width: 800px) {
      height: auto;
      width: 100%;
      margin-bottom: ${rhythm(3 / 4)};
      padding-top: 30%;
    }
`

export default SectionButton