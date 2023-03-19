import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip1.styled';

export default function HelpEquip1() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>
          Обладнання для очистки готової продукції
        </ProductionTitel>
      </div>
      <div>
        <ProductionText>
          Використовується для очистки верхньої частини бетонної суміші з
          лицьового шару свіжовідформованих виробів (усунення «облою», коли
          прес-форма відпрацювала свій ресурс) механічним шляхом (щіткою) або
          стисненим повітрям.
        </ProductionText>

        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/11.jpg'}
            alt="Бетонозмішувач "
          />

          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/22.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
