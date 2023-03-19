import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './HelpEquip6.styled';

export default function HelpEquip6() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>
          Обладнання для штучного старіння тротуарної плитки
        </ProductionTitel>
      </div>
      <div>
        <ProductionText>
          За допомогою цієї машини бетонні вироби можуть бути «зістарені» як
          руйнуванням кромок каміння, так і обробкою поверхні спеціальними
          молоточками.
        </ProductionText>
        <ProductionText>
          Машина оснащена двома ударними пристроями (у кожному по чотири ряди
          молоточків) та спеціальними пристосуваннями для старіння; ударні
          пристрої працюють за принципом змінної вібрації.
        </ProductionText>
        <ProductionText>
          Вироби знімаються з виробничого піддону, суцільним масивом (без
          проміжків між виробами) проходять через машину, а потім знову
          поділяються на ряди, завдяки чому можуть знову бути інтегровані в
          існуючу систему штабелювання.
        </ProductionText>
        <ProductionText>
          Нова конструкція машини дозволяє обробити тільки кромку виробів, при
          цьому поверхня залишається гладкою і недоторканою. Залежно від
          міцності каменів та бажаного рівня обробки кромок, рівень старіння
          може досягатися різними налаштуваннями.
        </ProductionText>
        <ProductionText>
          На останній стадії для досягнення ідеального результату кромки каменів
          округляються третім агрегатом, пристроєм для обрізання кромок.
        </ProductionText>
        <ProductionText>
          Різні розміри виробів, так само, як і шари виробів з різними
          розмірами, можуть бути оброблені на цій машині без складних
          налаштувань.
        </ProductionText>
        <PtoductionImg>
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/61.jpg'}
            alt="Бетонозмішувач "
          />
         
        </PtoductionImg>
        <PtoductionImg>
          
          <img
            src={process.env.PUBLIC_URL + '/imgs/production/help-equip/62.jpg'}
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
