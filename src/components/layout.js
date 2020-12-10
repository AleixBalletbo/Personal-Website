import React from "react"
import { Link, StaticQuery } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Header from "./header.js"

class Layout extends React.Component {
  render() {
    const { location, title, subtitle, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            marginBottom: 0,
            color: theme.backgroundColor
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
            color: theme.backgroundColor
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header/>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(30),
              padding: `${rhythm(3 / 4)}`,
            }}
          >
            <main>{children}</main>
          </div>
          <Footer>
            © Aleix Balletbó {new Date().getFullYear()}
            <br/>
            Built with {' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor}; 
`

const Footer = styled.footer`
  text-align: center;
  padding: ${rhythm(1 / 2)};
  background-color: ${props => props.theme.accentColor};
  color: ${props => props.theme.backgroundColor}; 
`

const theme = {
  backgroundColor: "#272F3F",
  primaryColor: "#171C26",
  secondaryColor: "#3D5A80",
  tertiaryColor: "#98C1D9",
  quaternaryColor: "#E0FBFC",
  accentColor: "#EE6C4D",
}

export default Layout
