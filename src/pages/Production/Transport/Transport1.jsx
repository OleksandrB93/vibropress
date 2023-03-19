import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './Transport1.styled';

export default function Transport1() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>
          Система з транспортно-складною групою (ТСГ)
        </ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Лінія з цією системою працює в автоматичному режимі. Транспортування
          піддонів з виробами між лінією та камерами тепловологої обробки
          здійснюється за допомогою ТСГ. Контроль процесу виробництва здійснює 1
          оператор через сенсорний екран панелі управління. ПЗ системи
          управління має зручний інтерфейс і може бути перекладено на потрібну
          замовником мову.
        </ProductionText>
        <ProductionText>
          Система з ТСГ потребує будівництва камер витримки. Подача пари
          рекомендується для роботи в одну зміну та обов'язкова для роботи у дві
          зміни.
        </ProductionText>
        <ProductionText>
          ТСГ необхідна транспортування піддонів з виробами між лінією
          вібропресування і камерами тепловологої обробки. ТСГ складається з
          верхньої та нижньої електричних візків, які переміщаються рельсами,
          розташованими перпендикулярно лінії вібропресування. Верхній візок,
          обладнаний вилочними захватами для піддонів, переміщається рельсами
          камер ТВО для вивантаження піддонів зі свіжовідформованими виробами та
          завантаження піддонами з витриманими виробами. Відстань між вилковими
          захватами регулюється залежно від висоти виробу.
        </ProductionText>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/transport/11.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
        <ProductionText>
          Для тепловологої обробки продуктів було розроблено систему металевих
          модулів. Це забезпечує швидке та безпечне складання елементів, більш
          високу і в будь-якому випадку регульовану точність рейок для ковзання
          автоматичних вантажно-розвантажувальних візків, високу безпеку при
          експлуатації.
        </ProductionText>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/transport/22.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>

        <ProductionText>
          <p>Автоматичний транспортувальний візок</p> контролюються електронікою
          та централізованим пультом управління, він встановлюється на сервіс з
          автоматичних датчиків у камерах обробки свіжих/сухих виробів.
        </ProductionText>
        <ProductionText>
          В залежності від конфігурації виробничої лінії, автоматичний візок
          транспортера вільно конфігурується за кількістю поверхів залежно від
          продуктивності, крім того, для особливих потреб візок може здійснювати
          поворот на 180 °.
        </ProductionText>
        <PtoductionImg>
          <img style={{width: '250px'}}
            src={process.env.PUBLIC_URL + '/imgs/production/transport/33.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
