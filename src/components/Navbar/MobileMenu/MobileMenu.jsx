import React, { useState } from 'react';
import LinkNav from 'components/Header/LinkNav/LinkNav';
import { StyledBurger } from './MobileMenu.styled';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <StyledBurger open={isOpen} onClick={handleToggle}>
        <span />
        <span />
        <span />
      </StyledBurger>
      {isOpen && <LinkNav handleToggle={handleToggle} isOpen={isOpen} />}
    </div>
  );
};

export default MobileMenu;
