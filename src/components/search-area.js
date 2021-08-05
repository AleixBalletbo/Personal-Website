import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const SearchArea = props => (
  <SearchBar
    type="text"
    aria-label="Search"
    placeholder="&#x1f50d;&#xfe0e; Type to filter posts..."
    onChange={props.onChange}
    />
)

export default SearchArea

const SearchBar = styled.input`
  margin-bottom: ${rhythm(3 / 4)};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 2)};
  }
  padding: ${rhythm(1 / 4)};
  background-color: ${props => props.theme.primaryColor};
  border-radius: ${rhythm(1 / 4)};
  border-width: 0;
  color: ${props => props.theme.quaternaryColor};
`