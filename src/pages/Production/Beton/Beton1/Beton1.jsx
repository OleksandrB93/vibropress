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
      </div>
    </ProductionContainer>
  );
}
