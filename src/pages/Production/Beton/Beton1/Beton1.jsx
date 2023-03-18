import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './Beton1.styled';

export default function Beton1() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>
          Системи подачі бетонної суміші у вібропрес
        </ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Бетонозмішувальний вузол може бути розміщений як поряд з лінією, так і
          над вібропресом, коли бетонна суміш через розвантажувальний люк
          бетонозмішувача безпосередньо надходить у приймальний бункер
          бетоноформувальної машини. При розміщенні бетонного заводу поруч із
          лінією бетонна суміш може транспортуватися у вібропрес за допомогою
          адресної або конвеєрної системи подачі. В адресній системі
          розвантаження суміші в бункер відбувається строго вертикально через
          шибер кюбеля, який пересувається рейками над лінією вібропресування.
          При конвеєрній подачі бетону замість кюбеля використовуються стрічкові
          транспортери.
        </ProductionText>
        <PtoductionImg>
          <PtoductionImg>
            <img
              src={process.env.PUBLIC_URL + '/imgs/production/beton/1/11.jpg'}
              alt="Вібропрес PGV-120U "
            />
          </PtoductionImg>
          <PtoductionImg>
            <img
              src={process.env.PUBLIC_URL + '/imgs/production/beton/1/12.jpg'}
              alt="Вібропрес PGV-120U "
            />
          </PtoductionImg>
        </PtoductionImg>
        <ProductionTitel>Системи дозування інертних матеріалів</ProductionTitel>
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
            src={process.env.PUBLIC_URL + '/imgs/production/beton/1/13.jpg'}
            alt="Вібропрес PGV-120U "
          />
        </PtoductionImg>
        <PtoductionImg>
          <PtoductionImg>
            <img
              src={process.env.PUBLIC_URL + '/imgs/production/beton/1/14.jpg'}
              alt="Вібропрес PGV-120U "
            />
          </PtoductionImg>
          <PtoductionImg>
            <img
              src={process.env.PUBLIC_URL + '/imgs/production/beton/1/15.jpg'}
              alt="Вібропрес PGV-120U "
            />
          </PtoductionImg>
        </PtoductionImg>
        <PtoductionImg>
          <PtoductionImg>
            <img
              src={process.env.PUBLIC_URL + '/imgs/production/beton/1/16.jpg'}
              alt="Вібропрес PGV-120U "
            />
          </PtoductionImg>
          <PtoductionImg>
            <img
              src={process.env.PUBLIC_URL + '/imgs/production/beton/1/17.jpg'}
              alt="Вібропрес PGV-120U "
            />
          </PtoductionImg>
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
