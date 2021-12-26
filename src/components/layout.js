import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import { rhythm } from "../utils/typography"
import Header from "./header/header.js"

class Layout extends React.Component {
  render() {
    const { header, children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header type = {header}/>
          <Content>
            {children}
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

const MyA = props => <a style = {{color: theme.accentColor, boxShadow: `none`}} {...props} />
const MyH2 = props => <h2 style = {{color: theme.tertiaryColor}} {...props} />

const components = {
  a: MyA,
  h2: MyH2
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    {element}
  </MDXProvider>
)

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
  max-width: ${rhythm(35)};
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
  backgroundColor: "#EDF2FA",
  primaryColor: "#F5F7FA",
  secondaryColor: "#E1ECFA",
  tertiaryColor: "#4A4A4A",
  quaternaryColor: "#535353",
  accentColor: "#1B4070",
  shadowColor: "#B0B0B0"
}

export default Layout
