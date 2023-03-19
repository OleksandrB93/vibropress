import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  PtoductionImg,
} from './PressForm4.styled';

export default function PressForm4() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Прес-форми для вібропрессування</ProductionTitel>
      </div>
      <div>
        <ProductionText>
          ТДВ «Моторика-Юг» проводить виробництво прес-форм, формоутворюючих
          оснасток, матриць, пуансонів, для всіх моделів вібропресів.
        </ProductionText>
        <ProductionTitel>
          Термін виробництва прес-форми 40 днів з моменту першого авансу!
        </ProductionTitel>

        <ProductionText>
          Виробляємо різноманітні конструкційно-технологічні варіанти прес-форм
          для вібропресів вітчизняних ("Строймаш", "Нартекс", "ТМ БУМ", "УМБР",
          "ВАСТ СЕРВІС+" та ін.) та зарубіжних виробників ("Zenith", "HESS",
          "OMAG", "Schlosser", "Knauer", "Masa", "Frima", "ZZBO", "ГЕВІТ" тощо).
        </ProductionText>
        <ProductionText>
          Всі прес-форми, що випускаються, виготовляються з однорідного
          сталевого листа або методом пакетування листів металу після лазерної
          різки. Можливе виготовлення форм як із вставками виконаними за
          технологією "цілісного фрезерування", так і зі звареними вставками.
        </ProductionText>

        <ProductionText>
          <b>Основні характеристики прес-форм:</b>
        </ProductionText>
        <ProductionText>
          • твердість робочої поверхні матриці та пластин пуансону – до HRC
          40…50;
        </ProductionText>
        <ProductionText>
          • гарантія – 30 000 циклів формування (при дотриманні правил
          експлуатації);
        </ProductionText>
        <ProductionText>
          • робочий ресурс – 60…100 тис.циклів формування (залежно від виду
          інертних матеріалів);
        </ProductionText>

        <PtoductionImg>
          <img
            src={
              process.env.PUBLIC_URL + '/imgs/production/press-form/press4.jpg'
            }
            alt="Бетонозмішувач "
          />
        </PtoductionImg>
      </div>
    </ProductionContainer>
  );
}
