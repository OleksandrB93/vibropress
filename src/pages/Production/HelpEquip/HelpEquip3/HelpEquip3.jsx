import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip3.styled';

export default function HelpEquip3() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Автоматична Спліттерна Установка</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Цей спліттер може бути вставлений повністю в автоматичну систему
          завантаження/розвантаження. Від піддону з блоками, що коляться, ви
          переходите до піддону з роз'ємними блоками з опціональною вбудованою
          обв'язкою. Крім спліттера, система в цілому складається з
          автоматичного багатопозиційного захвату, автоматизованих транспортерів
          введення та виведення продукту.
        </ProductionText>
        <ProductionText>
          Цей комплект машин дозволяє автоматично отримувати пакети колотих
          блоків, вже укладених на піддони, починаючи з пакетів блоків, що
          розділяються, розміщених на одному піддоні. Все повністю
          автоматизовано за допомогою ПЛК та вимагає присутності одного
          оператора з функціями контролю якості. Таким чином, можна
          максимізувати виробництво та обмежити дефекти продукції.
        </ProductionText>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/31.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/32.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>

        <ProductionText>
          Комплектація також може складатись лише із спліттера, який дозволяє
          виготовляти колоті блоки (т.зв. блоки «рваний камінь»), які виходять
          шляхом розколювання навпіл стандартних стінових блоків або цеглин, що
          пройшли тепловологу обробку.
        </ProductionText>
        <ProductionText>
          <b>- Чотиристороннє різання</b>
        </ProductionText>
        <ProductionText>
          <b>- Максимальний розмір блоку: 400 х 700 мм.</b>
        </ProductionText>
        <ProductionText>
          <b>- Ручна подача та позиціонування виробів для точності розколу.</b>
        </ProductionText>

        <PtoductionImg></PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
