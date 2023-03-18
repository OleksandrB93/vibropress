import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  img {
    width: ${({ isScrolled }) => (isScrolled ? '100px' : '180px')};
    transition: width 0.3s;
  }
`;
