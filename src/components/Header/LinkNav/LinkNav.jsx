import React, { useEffect } from 'react';
import {
  LinkContainer,
  NavContainer,
  Box,
  DropList,
  DropItem,
} from './LinkNav.styled';
import { useMediaQuery } from 'react-responsive';
import Contact from 'components/Contact/Contact';

export default function LinkNav({ handleToggle, isOpen }) {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    return () => {
      body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const maxLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <>
      <NavContainer>
        <LinkContainer to="/" onClick={handleToggle}>
          Головна
        </LinkContainer>
        <LinkContainer to="/about" onClick={handleToggle}>
          Про нас
        </LinkContainer>
        <LinkContainer to="/production">
          Продукція
          <DropList>
            <DropItem to="/production" onClick={handleToggle}>Вібропреси</DropItem>
            <DropItem>Бетонозмішувальні комплекси</DropItem>
            <DropItem>Прес-форми для вібропрессування</DropItem>
            <DropItem>vibropress</DropItem>
          </DropList>
        </LinkContainer>
        <LinkContainer to="/service" onClick={handleToggle}>
          Сервіс
        </LinkContainer>
        {maxLaptop && <Contact />}
      </NavContainer>
      <Box isOpen={isOpen} onClick={handleToggle} />
    </>
  );
}
