import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../../utils/typography"

const MobileMenu = props => (
  <MenuContainer open={props.open}>
    <ButtonLink to="/blog/" marginright={rhythm(3 / 4)}>
      <Button props={props}>Blog</Button>
    </ButtonLink>
    <ButtonLink to="/projects/">
      <Button props={props}>Projects</Button>
    </ButtonLink>
    <ButtonLink to="/about/" marginleft={rhythm(3 / 4)}>
      <Button props={props}>About me</Button>
    </ButtonLink>
  </MenuContainer>
)

const MenuContainer = styled.div`
  display:flex;
  margin-bottom: ${props => props.open ? rhythm(3 / 4) : 0};
  margin-left: ${rhythm(3 / 4)};
  margin-right: ${rhythm(3 / 4)};
  justify-content: space-between;
  @media (min-width: 800px) {
    display: none;
  }
  max-height: ${props => props.open ? "3.5em" : 0};
  overflow: hidden;
  transition: max-height 0.2s ease-out, margin-bottom 0.2s ease-out;
`

const ButtonLink = styled(Link)`
  display: flex;
  flex: 1;
  margin-left: ${props => props.marginleft};
  margin-right: ${props => props.marginright};
`

const Button = styled.button`
  flex: 1;
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 1em 0.5em;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.quaternaryColor};
  font-size: min(3vw, 15px);
  font-family: Montserrat, sans-serif;
  border-radius: 10px;
`

export default MobileMenu