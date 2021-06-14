import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../../utils/typography"

const MobileMenu = props => (
  <MenuContainer open={props.open}>
    <ButtonLink to="/blog/" marginright={rhythm(1 / 2)}>
      <Button props={props}>Blog</Button>
    </ButtonLink>
    <ButtonLink to="/projects/">
      <Button props={props}>Projects</Button>
    </ButtonLink>
    <ButtonLink to="/about/" marginleft={rhythm(1 / 2)}>
      <Button props={props}>About me</Button>
    </ButtonLink>
  </MenuContainer>
)

const MenuContainer = styled.div`
  display:flex;
  margin-bottom: ${props => props.open ? rhythm(1 / 2) : 0};
  margin-left: ${rhythm(1 / 2)};
  margin-right: ${rhythm(1 / 2)};
  justify-content: space-between;
  @media (min-width: 800px) {
    display: none;
  }
  max-height: ${props => props.open ? "4em" : 0};
  overflow: hidden;
  transition: max-height 0.3s ease-out, margin-bottom 0.3s ease-out;
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
  height: min(6vh, 100px);
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 0 0.5em;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.quaternaryColor};
  font-size: min(3.5vw, 15px);
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  border-radius: 10px;
`

export default MobileMenu