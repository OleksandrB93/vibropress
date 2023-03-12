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
`;

export const LocitionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 5px;
`;

export const GoogleMap = styled.iframe`
border-radius: 15px;
border: 1px solid #ff8900;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`

export const AddressFooter = styled.address`
  font-size: 15px;
  color: #000000ba;
  text-align: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  svg{
    padding: 3px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    color: black;
    text-decoration: none;
  }
`;
