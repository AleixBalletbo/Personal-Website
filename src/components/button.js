import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;

  background: ${props => props.theme.primaryColor};
  color: ${props => props.props.color || "rgb(255, 255, 255)"};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  border-radius: ${props => props.props.radius || "10px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px ${props => props.theme.accentColor};
    color: ${props => props.theme.primaryColor};
  }
`

export default Button
