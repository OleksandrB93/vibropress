import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkContainer = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 7px 30px;
  opacity: 1;

  &.active {
    color: #ff8900;
    background-color: #020202;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
  }

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
`;