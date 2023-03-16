import React, { useEffect } from 'react';
import {
  LinkContainer,
  NavContainer,
  Box,
  DropList,
  DropListVibro,
  DropItemVibro,
  DropItemVibroPoint,
  DropItemBeton,
  DropItemBetonPoint,
  DropListBeton,
  DropItemPress,
  DropItemPressPoint,
  DropListPress,
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
            <DropItemVibro to="/production" onClick={handleToggle}>
              Вібропреси
              <DropListVibro>
                <DropItemVibroPoint to="/production" onClick={handleToggle}>
                  Вібропрес PGV-120U(М)
                </DropItemVibroPoint>
                <DropItemVibroPoint>
                  Крокуючий Вібропрес PGV-W
                </DropItemVibroPoint>
                <DropItemVibroPoint>
                  Автоматичний Вібропрес PGV-400
                </DropItemVibroPoint>
                <DropItemVibroPoint>
                  Автоматичний Вібропрес PGV-1000
                </DropItemVibroPoint>
              </DropListVibro>
            </DropItemVibro>

            <DropItemBeton>
              Бетонозмішувальні комплекси
              <DropListBeton>
                <DropItemBetonPoint>Склади інертних</DropItemBetonPoint>
                <DropItemBetonPoint>
                  Бетонозмішувані пристрої
                </DropItemBetonPoint>
                <DropItemBetonPoint>Силоси цементу</DropItemBetonPoint>
                <DropItemBetonPoint>Конвеєрне обладнання</DropItemBetonPoint>
                <DropItemBetonPoint>Сито вібраційне ВС</DropItemBetonPoint>
              </DropListBeton>
            </DropItemBeton>

            <DropItemPress>
              Прес-форми для вібропрессування
              <DropListPress>
                <DropItemPressPoint>
                  Прес-форми для дорожнього каміння
                </DropItemPressPoint>
                <DropItemPressPoint>
                  Прес-форми для тротуарної плитки
                </DropItemPressPoint>
                <DropItemPressPoint>
                  Прес-форми для стінових блоків
                </DropItemPressPoint>
                <DropItemPressPoint>
                  Прес-форми для елементів ландшафтного дизайну
                </DropItemPressPoint>
              </DropListPress>
            </DropItemPress>
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
