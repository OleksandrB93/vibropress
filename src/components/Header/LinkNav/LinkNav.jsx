import React, { useEffect, useState } from 'react';
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
  DropItemTrans,
  DropListTrans,
  DropItemTransPoint,
} from './LinkNav.styled';
import { useMediaQuery } from 'react-responsive';
import Contact from 'components/Contact/Contact';

export default function LinkNav({ handleToggle, isOpen }) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

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

        <LinkContainerProd isHover={hover}>
          Продукція
          <DropList>
            <DropItemVibro>
              Вібропреси
              <DropListVibro isHover={hover}>
                <Li>
                  <DropItemVibroPoint
                    to="/vibropress/model1"
                    as={Link}
                    onClick={() => {
                      handleToggle && handleToggle();
                      handleHover();
                    }}
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
                <Li>
                  <DropItemBetonPoint
                    to="/beton/model1"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Системи подачі бетонної суміші у вібропрес
                  </DropItemBetonPoint>
                </Li>
                <Li>
                  <DropItemBetonPoint
                    to="/beton/model2"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Системи дозування інертних матеріалів
                  </DropItemBetonPoint>
                </Li>
                <Li>
                  <DropItemBetonPoint
                    to="/beton/model3"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Системи приготування бетонної суміші
                  </DropItemBetonPoint>
                </Li>
                <Li>
                  <DropItemBetonPoint
                    to="/beton/model4"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Системи зберігання та подачі цементу
                  </DropItemBetonPoint>
                </Li>
                <Li>
                  <DropItemBetonPoint
                    to="/beton/model5"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Конвеєрне обладнання
                  </DropItemBetonPoint>
                </Li>
                <Li>
                  <DropItemBetonPoint
                    to="/beton/model6"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Сито вібраційне ВС
                  </DropItemBetonPoint>
                </Li>
              </DropListBeton>
            </DropItemBeton>
            <DropItemPress>
              Прес-форми для вібропрессування
              <DropListPress>
                <Li>
                  <DropItemPressPoint
                    to="/press-form/model1"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Прес-форми для дорожнього каміння
                  </DropItemPressPoint>
                </Li>
                <Li>
                  <DropItemPressPoint
                    to="/press-form/model2"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Прес-форми для тротуарної плитки
                  </DropItemPressPoint>
                </Li>
                <Li>
                  <DropItemPressPoint
                    to="/press-form/model3"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Прес-форми для стінових блоків
                  </DropItemPressPoint>
                </Li>
                <Li>
                  <DropItemPressPoint
                    to="/press-form/model4"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Прес-форми для елементів ландшафтного дизайну
                  </DropItemPressPoint>
                </Li>
              </DropListPress>
            </DropItemPress>
            <DropItemTrans>
              Транспортна група
              <DropListTrans>
                <Li>
                  <DropItemTransPoint
                    to="/transport/model1"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Система з транспортно-складною групою (ТСГ)
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/transport/model2"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Система з піддонами на ніжках
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/transport/model3"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Система з Транспортованими Стелажами
                  </DropItemTransPoint>
                </Li>
              </DropListTrans>
            </DropItemTrans>

            <DropItemTrans>
              Допоміжне обладнання
              <DropListTrans>
                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model1"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Обладнання для очистки готової продукції
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model2"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Обладнання для вимивання готової продукції
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model3"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Автоматична Спліттерна Установка
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model4"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Системи фарбування виробів
                  </DropItemTransPoint>
                </Li>

                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model5"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Обладнання для змащення та обприскування технологічних
                    піддонів
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model6"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Обладнання для штучного старіння тротуарної плитки
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model7"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Обладнання для Барабанного старіння
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model8"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Подрібнювач Для бракованих виробів
                  </DropItemTransPoint>
                </Li>
                <Li>
                  <DropItemTransPoint
                    to="/help-equip/model9"
                    as={Link}
                    onClick={handleToggle}
                  >
                    Лінії на базі роботів пакувальників
                  </DropItemTransPoint>
                </Li>
              </DropListTrans>
            </DropItemTrans>
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
