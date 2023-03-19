import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip8.styled';

export default function HelpEquip8() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Подрібнювач для бракованих виробів</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Подрібнювач для бракованих виробів щокового типу призначена для
          подрібнення матеріалу до необхідної фракції.
        </ProductionText>

        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/81.jpg'}
            alt="Бетонозмішувач "
          />
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/82.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
       
      </div>
    </ProductionContainer>
  );
}
