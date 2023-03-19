import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip9.styled';

export default function HelpEquip9() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Лінії на базі роботів пакувальників</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          ТВД «Моторика-Юг» пропонує різні модифікації автоматичних та
          напівавтоматичних ліній на базі роботів пакувальників на будь-який
          бюджет. Робот-пакувальник (можуть бути декількох типів), призначений
          для укладання готових бетонних виробів на піддонах і може перекладати
          тротуарну плитку, дорожні і садові бордюри, стінові блоки, будівельну
          цеглу, водовідвідні лотки і тощо.
        </ProductionText>
        <ProductionText>
          У його конструкції використані рішення, що застосовуються донедавна
          лише в прецизійній промисловій робототехніці. Лінія має компактну
          конструкцію, характеризується низьким рівнем шуму та високою динамікою
          рухів. У той же час забезпечує високу точність позиціонування виробів,
          що переміщуються. Ушкодження продукції під час упаковки практично
          виключено.
        </ProductionText>
        <ProductionText>
          Використання в конструкції робота контрмас забезпечує енергетичну
          ефективність, незважаючи на високу швидкість та значне навантаження.
        </ProductionText>
        <ProductionText>
          Лінії на базі роботів пакувальників підходять для всіх типів
          вібропресів, таких виробників як "Строймаш", "Нартекс", "ТМ БУМ",
          "УМБР", "ВАСТ СЕРВІС+" та ін. та зарубіжних виробників - "Zenith",
          "HESS", "OMAG", "Schlosser", "Knauer", "Masa", "Frima", "ZZBO",
          "ГЕВІТ" тощо.
        </ProductionText>
        <ProductionText>
          За 1 годину роботи він перекладає з технологічних піддонів на
          транспортувальні паллети 75-150 м2 тротуарної плитки. Залежно від
          автоматизації лінії це дозволяє прибрати з виробництва до 10 осіб, які
          перекладають готову продукцію.
        </ProductionText>

        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/91.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/92.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/93.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/94.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
