import styled from '@emotion/styled';

export const FeaturesContainer = styled.div`
  margin-top: 70px;
  padding: 60px 0;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 370px 370px 370px;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #02749ea7;

  @media (max-width: 1200px) {
    grid-gap: 30px;
    grid-template-columns: 370px 370px;
  }

  @media (max-width: 768px) {
    grid-gap: 30px;
    grid-template-columns: 200px 200px;
  }

  @media (max-width: 480px) {
    grid-gap: 30px;
    grid-template-columns: 270px;
  }
`;

export const FeaturesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 350px;
  border-radius: 15px;
  background-color: #d7d7d7;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 180px;
  }
  @media (max-width: 480px) {
    width: 250px;
  }

  &:hover {
    background: linear-gradient(to right, #d7d7d7, #ff8900);
    background-size: 400% 400%;
    animation: gradient 1s ease-in-out forwards;
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

export const FeaturesText = styled.p`
  margin: 0;
  text-align: center;
`;
