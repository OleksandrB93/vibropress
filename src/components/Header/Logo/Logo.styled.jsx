import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  img {
    width: ${({ isScrolled }) => (isScrolled ? '150px' : '250px')};
    transition: width 0.3s;
  }
`;
