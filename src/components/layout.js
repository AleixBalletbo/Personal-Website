import React from "react"
import { Link, StaticQuery } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import { rhythm, scale } from "../utils/typography"
import Header from "./header/header.js"

class Layout extends React.Component {
  render() {
    const { header, children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header type = {header}/>
          <Content>
            <MDXProvider
              components={{
                a: props => <a {...props} style = {{color: theme.accentColor, boxShadow: `none`}}/>,
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
            <a style = {{color: theme.accentColor, boxShadow: `none`}} href="https://www.gatsbyjs.org">Gatsby</a>
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
  padding: ${rhythm(1 / 2)};
  @media (max-width: 800px) {
    padding: ${rhythm(1 / 2)};
  }
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.tertiaryColor};
  flex-shrink: 0;
`

const theme = {
  backgroundColor: "#EDDFDF",
  primaryColor: "#EDE8E8",
  secondaryColor: "#EDCACA",
  tertiaryColor: "#4A4A4A",
  quaternaryColor: "#696969",
  accentColor: "#701B1B",
  shadowColor: "#B0B0B0"
}

export default Layout
