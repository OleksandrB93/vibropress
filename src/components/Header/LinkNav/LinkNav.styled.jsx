import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;

    width: 55vw;
    height: 100vh;
    padding: 30px;
    padding-top: 80px;
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.596);
    background-color: #c7c7c7;
    > *:last-child {
      display: flex;
    }
  }
`;
export const LinkContainer = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
  padding: 7px 10px;
  opacity: 1;

  &:before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    border-bottom: 3px solid black;
    transition: transform 250ms ease-out;
    transform-origin: center;
    transform: scaleX(0);
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
