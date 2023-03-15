import { LogoContainer } from './Logo.styled';

export default function Logo({ isScrolled }) {
  return (
    <LogoContainer isScrolled={isScrolled}>
      <img
        src={process.env.PUBLIC_URL + '/imgs/logo.jpg'}
        alt="logo"
        width={250}
      />
    </LogoContainer>
  );
}
