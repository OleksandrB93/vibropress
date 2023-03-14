import styled from '@emotion/styled';

export const ServiceContainer = styled.div`
  @media (min-width: 320px) {
    margin: 7px 10px;
  }
  @media (min-width: 480px) {
    margin: 7px 45px;
  }
  @media (min-width: 768px) {
    margin: 15px 90px;
  }
  @media (min-width: 1200px) {
    margin: 30px 150px;
  }
`;

export const ServiceTitel = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

export const ServiceText = styled.p`
  font-size: 18px;
  padding: 5px 0px;
  text-indent: 40px;
  text-align: justify;
`;
