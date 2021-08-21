import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

export default function BlogSummaryEntry (props) {
  return(
    <Link to={`/blog${props.slug}`}>
      <Container>
        <LeftBar color={props.category.color}/>
        <Content>
          <TitleContainer>
            <Title>
              {props.title}
            </Title>
            <TagContainer>
              <Category color={props.category.color}>
                {props.category.label}
              </Category>
              {props.tags.map(tag => {
                return (
                  <Tag key={tag}>
                    #{tag}
                  </Tag>
                )
              })}
            </TagContainer>
          </TitleContainer>
        </Content>
      </Container>
    </Link>
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.primaryColor};
  border-radius: ${rhythm(1 / 4)};
  display: flex;
  flex-direction: row;
  margin-bottom: ${rhythm(1 / 2)};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 2)};
  }
`

const LeftBar = styled.div`
  width: ${rhythm(1 / 4)};
  flex-shrink: 0;
  background-color: ${props => props.color};
  border-radius: ${rhythm(1 / 4)} 0 0 ${rhythm(1 / 4)};
`

const Content = styled.div`
  padding: ${rhythm(1 / 4)};
  flex: 1;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: ${rhythm(1 / 4)};
  color: ${props => props.theme.accentColor};
  font-family: Montserrat,sans-serif;
  font-size: larger;
`

const TagContainer = styled.div`
  display: flex;
  flex: row;
  margin: 0 ${rhythm(-1 / 8)} 0 ${rhythm(-1 / 8)};
`

const Tag = styled.div`
  color: ${props => props.theme.tertiaryColor};
  margin: 0 ${rhythm(1 / 8)} 0 ${rhythm(1 / 8)};
  height: min-content;
  font-size: 0.9em;
`

const Category = styled.div`
  color: ${props => props.theme.primaryColor};
  border-radius: ${rhythm(1 / 4)};
  background-color: ${props => props.color};
  padding: 0 ${rhythm(1 / 4)} 0 ${rhythm(1 / 4)};
  margin: 0 ${rhythm(1 / 8)} 0 ${rhythm(1 / 8)};
  height: min-content;
  font-size: 0.9em;
`