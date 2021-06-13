import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Menu from "./menu"

const Header = props => (
  <StaticQuery
    query={headerQuery}
    render={data => {
      const { title, subtitle } = data.site.siteMetadata
      return (
        <Background>
          <Container type={props.type}>
            <Title>
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </Title>
            {props.type == "index" &&
              <Subtitle>
                  {subtitle}
              </Subtitle>
            }
            {props.type != "index" &&
              <Menu/>
            }
          </Container>
        </Background>
      )
    }}
  />
)

export default Header

const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        subtitle
        social {
          twitter
          devto
          github
        }
        aboutMe
      }
    }
  }
`

const Background = styled.header`
  background-color: ${props => props.theme.accentColor};
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(30)};
  padding: ${rhythm(3 / 4)};
  display: flex;
  flex-direction: ${props => props.type == "index" ? "column" : "row"};
  justify-content: space-between;
`


const Title = styled.h1`
  @media (max-width: 800px) {
    font-size: 7vw;
  }
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.backgroundColor};
`

const Subtitle = styled.h3`
  @media (max-width: 800px) {
    font-size: 4vw;
  }
  margin-top: ${rhythm(1 / 2)};
  margin-bottom: 0;
  color: ${props => props.theme.backgroundColor};
`
