import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip2.styled';

export default function HelpEquip2() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>
          Обладнання для вимивання готової продукції
        </ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Використовується для вимивання дрібних частинок бетонної суміші з
          лицьового шару свіжовідформованих виробів та надання їм рельєфної
          фактурної поверхні.
        </ProductionText>

        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/21.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/23.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/24.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/25.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
