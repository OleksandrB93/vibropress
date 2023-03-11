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
  top: 5%;
  left: 15%;
  color: #ff8900;
  font-size: 40px;
  font-weight: bold;
 
  background-color: #000000b0;
  padding: 5px 15px;
  border-radius: 15px;
  opacity: ${props => (props.isActive ? '1' : '0')};
  transform: translateX(${props => (props.isActive ? '0%' : '-100%')});
  transition: transform 0.8s ease-out, opacity 0.3s ease-out;
  animation: ${fadeIn} 0.5s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const SlideItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &:hover ${SlideText} {
    transform: translateX(0);
  }
`;

export const SlideImg = styled.img`
  width: 80%;
  height: 80vh;
`;

SlideText.defaultProps = {
  isActive: false,
};
