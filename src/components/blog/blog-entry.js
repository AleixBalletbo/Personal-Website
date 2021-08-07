import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

export default function BlogEntry (props) {
  console.log(props)
  return(
    <Link to={`/blog${props.slug}`}>
      <Container>
        <LeftBar/>
        <Content>
          <Title>
            {props.title}
          </Title>
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
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: ${rhythm(1 / 2)};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 4)};
  }
  color: ${props => props.theme.accentColor};
  font-family: Montserrat,sans-serif;
`

const Date = styled.small`
  color: ${props => props.theme.quaternaryColor};
`

const Description = styled.p`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: 0px;
`

