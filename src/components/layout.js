import React from "react"
import { Link, StaticQuery } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import { rhythm, scale } from "../utils/typography"
import Header from "./header/header.js"

class Layout extends React.Component {
  render() {
    const { location, title, subtitle, header, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header type = {header}/>
          <Content>
            <MDXProvider
              components={{
                pre: props => <pre {...props} style = {{backgroundColor: theme.primaryColor}}/>,
                a: props => <a {...props} style = {{color: theme.accentColor}}/>,
                h2: props => <h2 {...props} style = {{color: theme.tertiaryColor}}/>
              }}
            >
              {children}
            </MDXProvider>
          </Content>
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
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  align-self: center;
  width: 100%;
  max-width: ${rhythm(30)};
  padding: ${rhythm(3 / 4)};
  @media (max-width: 800px) {
    padding: ${rhythm(1 / 2)};
  }
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  text-align: center;
  padding: ${rhythm(3 / 4)};
  @media (max-width: 800px) {
    padding: ${rhythm(1 / 2)};
  }
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.tertiaryColor};
  flex-shrink: 0;
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
