import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../../utils/typography"
import Burger from "./burger"

const Menu = props => (
  <div>
    <MenuContainer>
      <Link to="/blog/" style={{boxShadow: 'none'}}>
        <Button to="/blog/" first props={props}>Blog</Button>
      </Link>
      <Link to="/projects/" style={{boxShadow: 'none'}}>
        <Button to="/projects/" props={props}>Projects</Button>
      </Link>
      <Link to="/about/" style={{boxShadow: 'none'}}>
        <Button to="/about/" last props={props}>About me</Button>
      </Link>
    </MenuContainer>
    <MobileMenuContainer>
      <Burger open={props.open} setOpen={props.setOpen}/>
    </MobileMenuContainer>
  </div>
)

// Desktop

const MenuContainer = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-top: ${rhythm(0.572)};
  margin-bottom: ${rhythm(-3 / 4)};
  @media (max-width: 800px) {
    display: none;
  }
`

const Button = styled.button`
  flex: 1 0 auto;
  height: auto;
  display: block;
  border: none;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0.75em 2em;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  ${props => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (url.includes(props.to)) {
      return 'background: ' + props.theme.backgroundColor + ';' +
              'color: ' + props.theme.accentColor + ';'
    }
    else {
      return 'background: ' + props.theme.primaryColor + ';' +
              'color: ' + props.theme.quaternaryColor + ';'
    }
  }};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  font-family: Montserrat, sans-serif;
  border-radius: ${props => {
    if (props.first) return "10px 0 0 0"
    else if (props.last) return "0 10px 0 0"
    else return "0 0 0 0"
  }};
  &:hover {
    background: ${props => props.theme.backgroundColor};
  }
`

// Mobile

const MobileMenuContainer = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`


export default Menu