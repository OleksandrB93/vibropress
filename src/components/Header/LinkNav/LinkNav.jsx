import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  LinkContainerProd,
  Li,
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

        <LinkContainerProd>
          Продукція
          <DropList>
            <DropItemVibro onClick={handleToggle}>
              Вібропреси
              <DropListVibro>
                <Li>
                  <DropItemVibroPoint
                    to="/vibropress/model1"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Вібропрес PGV-120U(М)
                  </DropItemVibroPoint>
                </Li>
                <Li>
                  <DropItemVibroPoint
                    to="/vibropress/model2"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Крокуючий Вібропрес PGV-W
                  </DropItemVibroPoint>
                </Li>
                <Li>
                  <DropItemVibroPoint
                    to="/vibropress/model3"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Автоматичний Вібропрес PGV-400
                  </DropItemVibroPoint>
                </Li>

                <Li>
                  <DropItemVibroPoint
                    to="/vibropress/model4"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Автоматичний Вібропрес PGV-1000
                  </DropItemVibroPoint>
                </Li>
                <Li>
                  <DropItemVibroPoint
                    to="/vibropress/model5"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Автоматичні лінії брикетування для металургії
                  </DropItemVibroPoint>
                </Li>
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
