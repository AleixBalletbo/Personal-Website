import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Menu = props => (
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
)

const MenuContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`

const Button = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 0em 0.5em;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: large;
  font-weight: 800;
  font-family: Montserrat, sans-serif;
  background-color: transparent;
  color: ${props => props.theme.primaryColor};
  height: fit-content;
  @media (max-width: 800px) {
    font-size: medium;
  }
`

export default Menu