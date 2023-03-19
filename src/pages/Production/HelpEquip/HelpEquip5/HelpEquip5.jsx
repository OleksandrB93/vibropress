import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip5.styled';

export default function HelpEquip5() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>
          Обладнання для змащення та обприскування технологічних піддонів
        </ProductionTitel>
      </div>
      <div>
        <ProductionText>
        Залежно від типу піддонів – дерев'яні або сталеві – в лінію інтегрується пристрій для обприскування піддонів водою або їх змащення мастилом відповідно.

        </ProductionText>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/51.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
