import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function BlogEntry (props) {
  return(
    <Link to={`/blog${props.slug}`}>
      <Container>
        <Image cover={props.cover}/>
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
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    -webkit-transition: opacity 0.4s ease-in-out;
    -moz-transition: opacity 0.4s ease-in-out;
    -ms-transition: opacity 0.4s ease-in-out;
    -o-transition: opacity 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out;
    opacity: 1;
    &:hover {
      opacity: 0.8;
    }
  `
const Image = styled.div`
  background-image: ${props => ('url('+props.cover+')')};
  background-size: cover;
  background-position: center center;
  height: auto;
  width: 100%;
  padding-bottom: 35%;
  border-radius: 10px 10px 0 0;
`
const Content = styled.div`
  padding: 15px;
`

const Title = styled.h3`
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${props => props.theme.accentColor};
`

const Date = styled.small`
  color: ${props => props.theme.quaternaryColor};
`

const Description = styled.p`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: 0px;
`

