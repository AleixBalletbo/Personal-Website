import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Menu = props => (
  <MenuContainer>
    <Link to="/blog/" style={{boxShadow: 'none'}}>
      <Button to="/blog/" first props={props}>
        <ButtonText>
          BLOG
        </ButtonText>
      </Button>
    </Link>
    <Link to="/projects/" style={{boxShadow: 'none'}}>
      <Button to="/projects/" props={props}>
        <ButtonText>
          PROJECTS
        </ButtonText>
      </Button>
    </Link>
    <Link to="/about/" style={{boxShadow: 'none'}}>
      <Button to="/about/" last props={props}>
        <ButtonText>
          ABOUT ME
        </ButtonText>
      </Button>
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
  padding: 0em 0.5em;
  cursor: pointer;
  background-color: transparent;
  height: fit-content;
  @media (max-width: 800px) {
    font-size: medium;
  }
`

const ButtonText = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.backgroundColor};
  letter-spacing: 1px;
`

export default Menu