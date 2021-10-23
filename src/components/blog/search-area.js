import { StaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const SearchArea = props => (
  <StaticQuery
    query={categoriesQuery}
      render={data => {
        const categories = data.allCategoriesJson.nodes
        return (
          <SearchContainer>
            <SearchBar
            type="text"
            aria-label="Search"
            placeholder="&#x1f50d;&#xfe0e; Type to filter posts..."
            onChange={props.onTextChange}
            />
            <CategorySelector onChange={props.onCategoryChange} defaultValue="0">
              <option key="0" value="0">
                All
              </option>
              {categories.map(category => {
                return(
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                )
              })}
            </CategorySelector>
          </SearchContainer>
        )
      }}
  />
)

export default SearchArea

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${rhythm(3 / 4)};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 2)};
  }
`

const SearchBar = styled.input`
  padding: ${rhythm(1 / 4)};
  background-color: ${props => props.theme.primaryColor};
  border-radius: ${rhythm(1 / 4)};
  border-width: 0;
  color: ${props => props.theme.tertiaryColor};
  flex: 1;
  width: 100%;
  box-shadow: 0 2px 4px ${props => props.theme.shadowColor};
`

const CategorySelector = styled.select`
  border-radius: ${rhythm(1 / 4)};
  border-width: 0;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.accentColor};
  padding: ${rhythm(1 / 4)} ${rhythm(1)} ${rhythm(1 / 4)} ${rhythm(1 / 4)};
  margin-left: ${rhythm(3 / 4)};
  @media (max-width: 800px) {
    margin-left: ${rhythm(1 / 2)};
  }
  width: min-content;
  appearance: none;
  background-image: url("data:image/svg+xml,<svg fill='${props => props.theme.accentColor.replace("#", "%23")}' width='16' height='16' xmlns='http://www.w3.org/2000/svg'><path d='m0,4l8,8l8,-8l-16,0z'/><path fill='none' d='m0,0l16,0l0,16l-16,0l0,-16z'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 50%;
  box-shadow: 0 2px 4px ${props => props.theme.shadowColor};
`

const categoriesQuery = graphql`
  query {
    allCategoriesJson {
      nodes {
        color
        id
        label
      }
    }
  }
`