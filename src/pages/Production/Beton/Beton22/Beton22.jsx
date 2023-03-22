import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './Beton22.styled';

export default function Beton22() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Системи дозування інертних матеріалів</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Бункера об'ємом 10 куб. метрів кожен. Кожен бункер має один секторний
          затвор, управління яким здійснюється за допомогою встановленого на
          ньому пневмоциліндру. На кожному бункері встановлений вібромотор.
        </ProductionText>
        <ProductionText>
          Зважувальний транспортер підвішений під бункерами на чотирьох
          високоточних тензодатчиках загальною вантажопідйомністю 8 тонн (по 2
          тони кожен). Інертні матеріали у вигляді піску, відсіву, щебіню
          подаються в бункера за допомогою ковшового навантажувача. Для захисту
          від попадання в бункера великих фракції на бункера можуть бути
          встановлені додаткові решітки.
        </ProductionText>
        <ProductionText>
          Точна дозація здійснюється автоматикою з імпульсним відкриттям
          затвора. За набором необхідної дози стежить автоматика. При
          ускладненні в подачі інертних (утворення повітряних зводів в
          інертних), короткочасно вмикаються вібромотор на необхідному бункері.
          У міру набору і зважування автоматика включає привід зважувального
          транспортера з якого інертні надходять в приймальний бункер.
        </ProductionText>
        <ProductionText>
          В такій же послідовності здійснюється подача і зважування наступного
          компонента з другого бункера. Після розвантаження зважувального
          транспортера, цикл дозації повторюється.
        </ProductionText>
        <PtoductionImg>
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton5/50.jpg'
            }
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
        <PtoductionImg>
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton5/52.jpg'
            }
            alt="Бетонозмішувач "
          />
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton5/53.jpg'
            }
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
        <PtoductionImg>
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton5/54.jpg'
            }
            alt="Бетонозмішувач "
          />
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/beton/beton5/55.jpg'
            }
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
