import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  @media (max-width: 888.98px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
  }
`;

export const NavContainer = styled.div`
  display: flex;
  text-transform: uppercase;
  font-style: italic;
  @media (max-width: 888.98px) {
    overflow: auto;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;

    width: 70vw;
    min-height: 100vh;
    padding: 30px;

    padding-top: 80px;
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.596);
    background-color: #c7c7c7;
    > *:last-child {
      display: flex;
    }
  }
`;

export const DropList = styled.ul`
  position: absolute;
  top: 130%;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  margin: 0;
  padding: 0;
  color: black;
  background-color: #c7c7c7d6;
  backdrop-filter: blur(5px);
  border: 1px solid #000;
  border-radius: 15px;
  z-index: 999;
  white-space: nowrap;

  li {
    display: inline-block;
    padding:10px;
    font-size: 16px;
    /* pointer-events: none; */
  }

  li:hover {
    background-color: black;
    color: orange;
    border-radius: 15px;
  }
`;


export const LinkContainer = styled(NavLink)`
  width: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 7px 10px;
  opacity: 1;

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ff8900;
    &:before {
      transform: scaleX(0.8);
      box-shadow: 0px -1px 70px 1px black;
    }
  }

  &.active {
    color: #ff8900;
    background-color: #020202;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
  }
  &.active:before {
    border-color: #ff8900;
  }
`;
export const LinkContainerProd = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 7px 15px;
  opacity: 1;
  margin-right: 8px;
  /* &:hover {
    ${DropList} {
      display: ${p => (p.isHover ? 'block' : 'block')};
    }
  } */
  :hover {
    background-color: #020202;
    box-shadow: rgba(255, 166, 0, 0.841) 0px 5px 15px;
    border-radius: 10px;
  }

  @media (min-width: 889px) {
    margin-left: 10px;
  }

  @media (max-width: 888.98px) {
    margin-bottom: 10px;
  }

  &:before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0%;
    bottom: 0px;
    border-bottom: 3px solid black;
    transition: transform 250ms ease-out;
    transform-origin: center;
    transform: scaleX(0);

    @media (max-width: 888.98px) {
      left: -8%;
    }
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ff8900;
    &:before {
      transform: scaleX(0.8);
      box-shadow: 0px -1px 70px 1px black;
    }
  }

  &.active {
    color: #ff8900;
    background-color: #020202;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
  }
  &.active:before {
    border-color: #ff8900;
  }
`;
