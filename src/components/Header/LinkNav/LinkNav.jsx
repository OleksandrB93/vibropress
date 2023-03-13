import React from 'react';
import { LinkContainer } from './LinkNav.styled';

export default function LinkNav() {
  return (
    <div>
      <LinkContainer to="/">Головна</LinkContainer>
      <LinkContainer to="/about">Про нас</LinkContainer>
      <LinkContainer to="/production">Продукція</LinkContainer>
      <LinkContainer to="/service">Сервіс</LinkContainer>
      {/* <LinkContainer to="/contacts">Контакти</LinkContainer> */}
    </div>
  );
}
