import React, { useEffect, useState } from 'react';
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
    query: '(min-width: 889px)',
  });

  const maxLaptop = useMediaQuery({
    query: '(max-width: 888.98px)',
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavbarContainer isScrolled={isScrolled}>
        <Logo isScrolled={isScrolled}/>
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
