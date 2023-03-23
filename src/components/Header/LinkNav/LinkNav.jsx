import React, { useState, useEffect } from 'react';
import DropSlider, { DropSliderTrans } from 'components/DropSlider/DropSlider';
import {
  LinkContainer,
  NavContainer,
  Box,
  DropList,
  LinkContainerProd,
} from './LinkNav.styled';
import { DropSliderContainer } from 'components/DropSlider/DropSlider.styled';
import { useMediaQuery } from 'react-responsive';
import Contact from 'components/Contact/Contact';
import dropvibro from '../../../data/dropvibro.json';
import dropbeton from '../../../data/dropbeton.json';
import droppress from '../../../data/droppress.json';
import droptransport from '../../../data/droptransport.json';
import drophelp from '../../../data/drophelp.json';

export default function LinkNav({ handleToggle, isOpen }) {
  const [dropSliders, setDropSliders] = useState({
    vibro: false,
    beton: false,
    press: false,
    trans: false,
    help: false,
  });

  const [dropMenu, setDropMenu] = useState(false);

  const handleSlider = key => {
    setDropSliders(prevDropSliders => ({
      ...prevDropSliders,
      [key]: !prevDropSliders[key],
    }));
  };

  const handleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  useEffect(() => {
    document.body.style.overflow = dropMenu ? 'hidden' : 'auto';
  }, [dropMenu]);

  const handleSliderClick = event => {
    event.stopPropagation();
  };

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

        <LinkContainerProd onClick={handleDropMenu}>
          Продукція
          {dropMenu && (
            <div>
              <DropList>
                <li
                  key="vibro"
                  onMouseEnter={() => handleSlider('vibro')}
                  onMouseLeave={() => handleSlider('vibro')}
                  onClick={handleSliderClick}
                >
                  Вібропреси
                </li>
                <li
                  key="beton"
                  onMouseEnter={() => handleSlider('beton')}
                  onMouseLeave={() => handleSlider('beton')}
                  onClick={handleSliderClick}
                >
                  Бетонозмішувальні комплекси
                </li>
                <li
                  key="press"
                  onMouseEnter={() => handleSlider('press')}
                  onMouseLeave={() => handleSlider('press')}
                  onClick={handleSliderClick}
                >
                  Прес-форми
                </li>
                <li
                  key="trans"
                  onMouseEnter={() => handleSlider('trans')}
                  onMouseLeave={() => handleSlider('trans')}
                  onClick={handleSliderClick}
                >
                  Транспортна група
                </li>
                <li
                  key="help"
                  onMouseEnter={() => handleSlider('help')}
                  onMouseLeave={() => handleSlider('help')}
                  onClick={handleSliderClick}
                >
                  Допоміжне обладнання
                </li>
              </DropList>
            </div>
          )}
          {dropSliders.vibro && (
            <DropSliderContainer
              onMouseEnter={() => handleSlider('vibro')}
              onMouseLeave={() => handleSlider('vibro')}
            >
              <DropSlider
                dropSlider={dropvibro}
                handleSlider={() => handleSlider('vibro')}
              />
            </DropSliderContainer>
          )}
          {dropSliders.beton && (
            <DropSliderContainer
              onMouseEnter={() => handleSlider('beton')}
              onMouseLeave={() => handleSlider('beton')}
            >
              <DropSlider
                dropSlider={dropbeton}
                handleSlider={() => handleSlider('beton')}
              />
            </DropSliderContainer>
          )}
          {dropSliders.press && (
            <DropSliderContainer
              onMouseEnter={() => handleSlider('press')}
              onMouseLeave={() => handleSlider('press')}
            >
              <DropSlider
                dropSlider={droppress}
                handleSlider={() => handleSlider('press')}
              />
            </DropSliderContainer>
          )}
          {dropSliders.trans && (
            <DropSliderContainer
              onMouseEnter={() => handleSlider('trans')}
              onMouseLeave={() => handleSlider('trans')}
            >
              <DropSliderTrans
                dropSlider={droptransport}
                handleSlider={() => handleSlider('trans')}
              />
            </DropSliderContainer>
          )}
          {dropSliders.help && (
            <DropSliderContainer
              onMouseEnter={() => handleSlider('help')}
              onMouseLeave={() => handleSlider('help')}
            >
              <DropSlider
                dropSlider={drophelp}
                handleSlider={() => handleSlider('help')}
              />
            </DropSliderContainer>
          )}
        </LinkContainerProd>
        <LinkContainer to="/service" onClick={handleToggle}>
          Сервіс
        </LinkContainer>
        {maxLaptop && <Contact />}
      </NavContainer>
      <Box isOpen={isOpen} onClick={handleToggle} />
    </>
  );
}
