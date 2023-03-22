import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip4.styled';

export default function HelpEquip4() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Системи фарбування виробів "ColorMix"</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Система складається зі станції дозування пігментів та модуля
          "ColorMix" і дозволяє отримувати вироби, основний та/або лицьовий шар
          яких містить кілька бетонних сумішей різного відтінку. Модуль
          інтегрується всередину приймального бункера вібропресу та оснащується
          окремим гідравлічним шибером. Від двох до чотирьох бетонних сумішей з
          барвником обраного кольору по черзі подаються до допоміжного бункеру,
          звідки вони одночасно надходять в завантажувальний ящик, перемішуючись
          між собою. В результаті змішування кольорів кожен виріб має
          неповторний зовнішній вигляд з необхідною повторюваністю.
        </ProductionText>

        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/41.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/42.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/43.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/44.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
