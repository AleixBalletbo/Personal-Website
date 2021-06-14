import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const Burger = ({open, setOpen}) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
)

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 7vw;
  height: 7vw;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 7vw;
    height: 1vw;
    background: ${({ theme }) => theme.backgroundColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default Burger;