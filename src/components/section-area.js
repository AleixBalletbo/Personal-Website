import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const SectionArea = props => (
  <SectionAreaDiv props={props}>{props.children}</SectionAreaDiv>
)

const SectionAreaDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export default SectionArea