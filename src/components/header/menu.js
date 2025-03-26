import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const Menu = props => {
  const location = useLocation()
  const isActive = (path) => location.pathname.includes(path)

  return (
    <MenuContainer>
      <Link to="/blog/" style={{boxShadow: 'none'}}>
        <Button to="/blog/" first props={props} active={isActive("/blog/")}>
          <ButtonText>
            BLOG
          </ButtonText>
        </Button>
      </Link>
      <Link to="/projects/" style={{boxShadow: 'none'}}>
        <Button to="/projects/" props={props} active={isActive("/projects/")}>
          <ButtonText>
            PROJECTS
          </ButtonText>
        </Button>
      </Link>
      <Link to="/about/" style={{boxShadow: 'none'}}>
        <Button to="/about/" last props={props} active={isActive("/about/")}>
          <ButtonText>
            ABOUT ME
          </ButtonText>
        </Button>
      </Link>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`

const Button = styled.button`
  border: none;
  padding: 0.2em 0.5em;
  cursor: pointer;
  background-color: transparent;
  height: fit-content;
  
  ${props => props.active && `
    background-color: ${props.theme.backgroundColor};
    border-radius: ${rhythm(1 / 4)};
    ${ButtonText} {
      color: ${props.theme.accentColor};
    }
  `}

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