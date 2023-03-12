import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SlideText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%)
    scale(${props => (props.isActive ? '1' : '0')});
  color: #ff8900;
  font-size: 30px;
  font-weight: bold;
  background-color: #00000094;
  padding: 5px 20px;
  border-radius: 15px;
  text-align: center;
  opacity: ${props => (props.isActive ? '1' : '0')};
  transition: transform 0.8s ease-out, opacity 0.3s ease-out;
  animation: ${fadeIn} 0.5s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 36px;
  }
`;

export const SlideItem = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
`;

export const SlideImg = styled.img`
  position: relative;
  width: 75%;
  height: 75vh;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
`;

SlideText.defaultProps = {
  isActive: false,
};
