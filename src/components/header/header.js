import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../../utils/typography"
import Menu from "./menu"
import ProfilePic from "../pics/profile-pic.js"

const Header = props => {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        const { title } = data.site.siteMetadata
        return (
          <ExternalContainer>
            <InnerContainer type={props.type}>
              <ProfileLink to="/">
                <ProfilePic/>
              </ProfileLink>
              {props.type != "index" &&
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
              }
              <Menu/>
            </InnerContainer>
          </ExternalContainer>
        )
      }}
    />
  )
}

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

const ExternalContainer = styled.header`
  background-color: ${props => props.theme.accentColor};
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
`

const InnerContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  flex: 1;
  max-width: ${rhythm(30)};
  padding: ${rhythm(1 / 2)};
  @media (max-width: 800px) {
    padding: ${rhythm(1 / 4)};
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.h1`
  @media (max-width: 800px) {
    display: none;
  }
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.primaryColor};
  align-self: center;
`

const ProfileLink = styled(Link)`
  margin-right: ${rhythm(1 / 2)};
  align-self: center;
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  display: flex;
`