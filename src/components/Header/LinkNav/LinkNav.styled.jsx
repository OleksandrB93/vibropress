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
  @media (max-width: 888.98px) {
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

export const DropList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  color: black;
  background-color: #c7c7c7a3;
  border: 1px solid #000;
  width: 200px;
  z-index: 999;

  li {
    padding: 10px;
  }

  li:hover {
  }
  animation: fadeIn 250ms ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropItem = styled.li``;

export const LinkContainer = styled(NavLink)`
  width: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
  padding: 7px 10px;
  opacity: 1;

  &:hover {
    ${DropList} {
      display: block;
    }
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
export const LinkContainerProd = styled.div`
  cursor: pointer;
  width: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
  padding: 7px 10px;
  opacity: 1;
  &:hover {
    ${DropList} {
      display: ${p => (p.isHover ? 'block' : 'block')};
    }
  }
  :hover {
    background-color: #020202;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

export const DropListVibro = styled.ul`

  width: 180px;
  position: absolute;
  top: 0;
  left: 100%;
  /* transform: translateX(100%); */
  display: none;
  border: 1px solid #000;
  background-color: #c7c7c7a3;

  animation: fadeIn 250ms ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
`;

export const DropItemVibro = styled.li`
  position: relative;
  font-size: 15px;

  &:hover {
    ${DropListVibro} {
      display: block;
    }
  }
  background-color: #c7c7c7a3;
`;

export const DropItemVibroPoint = styled.li`
  text-decoration: none;
  list-style: none;
  color: black;
  border-top: none;
  font-size: 14px;
`;

export const DropListBeton = styled.ul`
  width: 180px;
  position: absolute;
  top: 0;
  left: 100%;
  display: none;
  border: 1px solid #000;

  animation: fadeIn 250ms ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const DropItemBeton = styled.li`
  position: relative;
  font-size: 14px;
  &:hover {
    ${DropListBeton} {
      display: block;
    }
  }
`;

export const DropItemBetonPoint = styled.li`
  text-decoration: none;
  list-style: none;
  color: black;
  background-color: #c7c7c7a3;
  font-size: 15px;

  border-top: none;
`;

export const DropListPress = styled.ul`
  position: absolute;
  width: 180px;

  top: 0;
  left: 100%;
  display: none;
  border: 1px solid #000;
  background-color: #c7c7c7a3;

  animation: fadeIn 250ms ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const DropItemPress = styled.li`
  position: relative;
  font-size: 14px;

  &:hover {
    ${DropListPress} {
      display: block;
    }
  }
`;

export const DropItemPressPoint = styled.li`
  text-decoration: none;
  list-style: none;
  color: black;

  font-size: 14px;
  border-top: none;
`;
