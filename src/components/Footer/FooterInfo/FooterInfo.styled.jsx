import styled from '@emotion/styled';
export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;
export const LeftInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  margin-bottom: 5px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const LocitionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  svg {
    padding: 3px;
  }
`;

export const GoogleMap = styled.iframe`
  border-radius: 15px;
  border: 1px solid #ff8900;
  box-shadow: rgba(38, 57, 77, 0.337) 0px 20px 30px -10px;

  @media (max-width: 768px) {
    width: 450px;
  }
  @media (max-width: 480px) {
    width: 250px;
  }
`;

export const AddressFooter = styled.address`
  font-size: 15px;
  color: #000000ba;
  text-align: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  svg {
    padding: 3px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 6px; */
    color: black;
    text-decoration: none;
  }
`;

export const ContactLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
