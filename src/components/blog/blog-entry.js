import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

export default function BlogEntry (props) {
  return(
    <Link to={`/blog${props.slug}`}>
      <Container>
        <LeftBar/>
        <Content>
          <TitleContainer>
            <Title>
              {props.title}
            </Title>
            <TagContainer>
              {props.tags.map(tag => {
                console.log(tag)
                return (
                  <Tag key={tag}>
                    #{tag}
                  </Tag>
                )
              })}
            </TagContainer>
          </TitleContainer>
          <Date>
            {props.date}
          </Date>
          <Description>
            {props.description}
          </Description>
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
  margin-bottom: ${rhythm(3 / 4)};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 2)};
  }
`

const LeftBar = styled.div`
  width: ${rhythm(1 / 4)};
  flex-shrink: 0;
  background-color: ${props => props.theme.accentColor};
  border-radius: ${rhythm(1 / 4)} 0 0 ${rhythm(1 / 4)};
`

const Content = styled.div`
  padding: ${rhythm(1 / 2)};
  flex: 1;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: ${rhythm(1 / 3)};
  color: ${props => props.theme.accentColor};
  font-family: Montserrat,sans-serif;
  margin-right: auto;
  @media (max-width: 800px) {
    font-size: 5vw;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex: row;
  margin: 0 ${rhythm(-1 / 8)} ${rhythm(1 / 4)} ${rhythm(-1 / 8)};
`

const Tag = styled.div`
  color: ${props => props.theme.primaryColor};
  border-radius: ${rhythm(1 / 4)};
  background-color: ${props => props.theme.secondaryColor};
  padding: 0 ${rhythm(1 / 4)} 0 ${rhythm(1 / 4)};
  margin: 0 ${rhythm(1 / 8)} 0 ${rhythm(1 / 8)};
  height: min-content;
`

const Date = styled.small`
  color: ${props => props.theme.quaternaryColor};
`

const Description = styled.p`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: 0px;
`

