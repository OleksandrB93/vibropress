import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LinkNav from 'components/Header/LinkNav/LinkNav';
import Logo from 'components/Header/Logo/Logo';
import Buttons from 'components/Header/Buttons/Buttons';
import { NavbarContainer } from './Navbar.styled';
import Footer from 'components/Footer/Footer';
import Contact from 'components/Contact/Contact';
import MobileMenu from './MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
  const minLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const maxLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  });
  return (
    <div>
      <NavbarContainer>
        <Logo />
        {minLaptop && <LinkNav />}
        <Buttons />
        {maxLaptop && <MobileMenu />}
        {minLaptop && <Contact />}
      </NavbarContainer>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
