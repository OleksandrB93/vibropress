import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip7.styled';

export default function HelpEquip7() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Обладнання для Барабанного старіння</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Барабан є пристроєм, спроектованим і виготовленим для подальшої
          обробки тротуарної литки різних форм і розмірів, одно- або двошарова.
        </ProductionText>
        <ProductionText>
          З системою обертання, керованої напівавтоматичним циклом, оператор
          поміщає всередину барабана вироби (без нейлону, стяжок та піддонів)
          встановлює тривалість процесу старіння.
        </ProductionText>
        <ProductionText>
          Наприкінці цієї операції зістарені вироби буде випущено з барабана,
          готового до продажу.
        </ProductionText>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/71.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
