import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LinkNav from 'components/Header/LinkNav/LinkNav';
import Logo from 'components/Header/Logo/Logo';
import Buttons from 'components/Header/Buttons/Buttons';
import { NavbarContainer } from './Navbar.styled';
import Footer from 'components/Footer/Footer';

export default function Navbar() {
  return (
    <div>
      <NavbarContainer>
        <Logo />
        <LinkNav />
        <Buttons />
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
