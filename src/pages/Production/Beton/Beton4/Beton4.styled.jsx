import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ProductionContainer = styled.div`
  @media (min-width: 320px) {
    margin: 7px 10px;
  }
  text-align: center;
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

export const ProductionTitel = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

export const ProductionText = styled.p`
  font-size: 18px;
  padding: 5px 0px;
  text-indent: 40px;
  text-align: justify;
  hyphens: auto;
`;

export const ProductionTitlePrincip = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: start;
  text-indent: 40px;
`;

export const ProductionTextPrincip = styled.p`
  font-size: 18px;
  padding: 5px 0px;
  text-indent: 40px;
  text-align: justify;
  hyphens: auto;
`;

export const ProductionLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  color: #555555;
`;

export const PtoductionImg = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 20px;
    object-fit: cover;
    margin: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    @media (min-width: 380px) {
      width: 300px;
    }

    @media (min-width: 480px) {
      width: 400px;
    }

    @media (min-width: 768px) {
      width: 450px;
    }
    @media (min-width: 1200px) {
      width: 600px;
    }
    @media (min-width: 1500px) {
      width: 1000px;
    }
  }
  figure {
    margin: 0;
    font-weight: bold;
  }
`;

export const DescriptionTitle = styled.p`
  text-align: center;
`;

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TheadTitle = styled.p`
  margin-top: 30px;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const TheadBox = styled.thead`
  th {
    flex-basis: calc(100% / 3);
    text-align: center;
  }
`;

export const HeadTr = styled.tr`
  border: 1px solid black;
  th {
    text-align: center;
    padding: 10px;
    border: 1px solid black;
  }
`;

export const Tbody = styled.tbody`
  tr {
    td:first-of-type {
      text-align: left;
      padding-left: 30px;
      width: 200px;
    }

    td:nth-of-type(2) {
      width: 200px;
    }
    td:nth-of-type(3) {
      width: 200px;
    }

    td {
      border: 1px solid black;
      padding: 5px;
    }
  }
`;

export const FlexBlock = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
      flex-direction: column;
    }
img{
  border-radius: 20px;
    object-fit: cover;
    margin: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;



    @media (min-width: 768px) {
      width: 250px;
    }
    @media (min-width: 1200px) {
      width: 650px;
    }
}
`;
