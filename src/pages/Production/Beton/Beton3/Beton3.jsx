import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,FlexBlock
} from './Beton3.styled';

export default function Beton3() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>СИСТЕМИ ЗБЕРІГАННЯ ТА ПОДАЧІ ЦЕМЕНТУ</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Системи зберігання та подачі цементу складається з силосів цементу,
          шнеків для подачі цементу та дозаторів цементу. У бетонних заводах ТДВ
          «Моторика-Юг» можна використовувати силоси цементу об'ємом 30-60 тон.
          Задане оператором необхідна кількість цементу подається з силосу по
          шнеку в бункер-дозатор цементу, обладнаний тензодатчиками, завдяки
          яким досягається швидке та точне дозування цементу в бетонозмішувач.
        </ProductionText>
        <ProductionText>
          Силоси цементу призначені для подачі та зберігання цементу з подальшим
          приготуванням сухої суміші або бетону.
        </ProductionText>
        <ProductionText>
          Цемент подається в силос із цементовозу по трубі закачування. При
          ускладненні подачі цементу в силосі вмикається система аерації або
          вібромотор.
        </ProductionText>
        <ProductionText>
          Додатково силос може бути укомплектований фільтром цементу та датчиком
          тиску. Крім того, на силос може бути встановлений, як додаткова опція,
          комплект тензодатчиків, який дозволяє оперативно вимірювати масу
          цементу в силосі і забезпечувати повний контроль на всіх етапах
          виробництва від приймання цементу до контролю його щоденного залишку.
        </ProductionText>
        <ProductionText>
          Конструкція силосу- це металевий циліндр, закритий зверху кришкою з
          вентиляційними отворами і фільтрами, що закінчується знизу конусом з
          отвором і встановленим в ньому шиберним затвором для видачі цементу.
          Встановлюється вертикально на опорах.
        </ProductionText>
        <ProductionText>
          <strong>Додатково можна доукомплектувати:</strong>
        </ProductionText>
        <ProductionText>- шнековими транспортерами</ProductionText>
        <ProductionText>- вібромотором</ProductionText>
        <ProductionText>- затвором дисковим</ProductionText>
        <ProductionText>- фільтром цементу з віброочищенням</ProductionText>
        <ProductionText>- датчиком рівня цементу</ProductionText>
        <ProductionText>- системою аерації.</ProductionText>
        <PtoductionImg>
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton3/31.jpg'
            }
            alt="Бетонозмішувач "
          />
        </PtoductionImg>

        <FlexBlock>
            <img
              src={
                process.env.PUBLIC_URL + '/imgs/production/beton/beton3/32.jpg'
              }
              alt="Бетонозмішувач "
            />
            <img
              src={
                process.env.PUBLIC_URL + '/imgs/production/beton/beton3/33.jpg'
              }
              alt="Бетонозмішувач "
            />
        </FlexBlock>
      </div>
    </ProductionContainer>
  );
}
