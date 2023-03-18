import { LogoContainer } from './Logo.styled';

export default function Logo({ isScrolled }) {
  return (
    <LogoContainer isScrolled={isScrolled}>
      <img
        src={process.env.PUBLIC_URL + '/imgs/logo.png'}
        alt="logo"
      />
    </LogoContainer>
  );
}
