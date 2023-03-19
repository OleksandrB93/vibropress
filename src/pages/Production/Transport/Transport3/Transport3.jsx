import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './Transport3.styled';

export default function Transport3() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Система З Транспортованими Стелажами</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Дана система передбачає використання транспортованих сталевих стелажів
          (заввишки 12-16 поверхів) і служить для штабелювання піддонів. У лінії
          із системою зі стелажами бере участь також вилковий навантажувач, який
          відвозить стелаж піддонів зі свіжовідформованими виробами до камер
          теплообробки.
        </ProductionText>
        <ProductionText>
          Комплектація лінії індивідуальна для кожного проекту та залежить від
          вимог замовника та умов експлуатації. Залежно від особливостей місця
          установки вузли лінії можуть бути спроектовані в пряму лінію або
          «U»-подібну. Все обладнання буває оснащене огорожами безпеки, дверима
          та датчиками.
        </ProductionText>

        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/transport/66.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/transport/88.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/transport/77.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      
        <PtoductionImg>
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
