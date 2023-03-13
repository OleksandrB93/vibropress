import React from 'react';
import { LinkContainer,NavContainer } from './LinkNav.styled';
import { useMediaQuery } from 'react-responsive';
import Contact from 'components/Contact/Contact';

export default function LinkNav() {
  const maxLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });
  return (
    <NavContainer>
      <LinkContainer to="/">Головна</LinkContainer>
      <LinkContainer to="/about">Про нас</LinkContainer>
      <LinkContainer to="/production">Продукція</LinkContainer>
      <LinkContainer to="/service">Сервіс</LinkContainer>
      {maxLaptop && <Contact/>}
    </NavContainer>
  );
}
