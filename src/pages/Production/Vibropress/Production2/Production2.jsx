import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  DescriptionTitle,
  Table,
  TheadBox,
  TheadTitle,
  HeadTr,
  Tbody,
  PtoductionImg,
  ProductionTextPrincip,
  ProductionTitlePrincip,
} from './Production2.styled';

export default function Production2() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Крокуючий Вібропрес PGV-W</ProductionTitel>
        <DescriptionTitle>
          Обладнання для виробництва блоків та бордюру
        </DescriptionTitle>
        <PtoductionImg>
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                '/imgs/production/vibropress/product2.jpg'
              }
              alt="Вібропрес PGV-120U "
            />
            <figure>Вібропрес PGV-W</figure>
          </figure>
        </PtoductionImg>
      </div>
      <div>
        <ProductionText>
          Вібропрес працює в кроковому режимі, пересуваючись на колесах по
          виробничому майданчику, залишаючи за собою вироблені вироби.
        </ProductionText>
        <ProductionText>
          Завдяки невеликій потужності та адаптації до малої виробничої
          інфраструктури, крокуючий вібропрес PGV-W оптимально підходить для
          малих та середніх будівельних фірм.
        </ProductionText>
        <ProductionTitlePrincip>
          Обладнання призначене для виробництва наступної продукції:
        </ProductionTitlePrincip>
        <ProductionTextPrincip>
          - виробів для будівельних робіт (пустотілі блоки для стін та
          перекриттів, блоки для фундаменту);
        </ProductionTextPrincip>
        <ProductionTextPrincip>
          - поребрик тротуарний, дорожній бордюр;
        </ProductionTextPrincip>
        <ProductionTextPrincip>
          - виробів малої архітектури (трубки, жолобки тощо.)
        </ProductionTextPrincip>
      </div>
      <TheadTitle>
        Широкий асортимент виробів здійснюється завдяки великій номенклатурі
        прес-форм.
      </TheadTitle>
      <Table style={{marginBottom :'50px'}}>
        <TheadBox>
          <HeadTr>
            <th>Найменування параметру</th>
            <th>Одиниці вимірювання</th>
            <th>Значення</th>
          </HeadTr>
        </TheadBox>
        <Tbody>
          <tr>
            <td>Загальна потужність</td>
            <td>кВт</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Напруга</td>
            <td>Вольт</td>
            <td>380</td>
          </tr>
          <tr>
            <td>Розмір формовочної зони</td>
            <td>мм</td>
            <td>800х750</td>
          </tr>
          <tr>
            <td>Висота виробів (мін/макс)</td>
            <td>мм</td>
            <td>до 250</td>
          </tr>
          <tr>
            <td>Цикл формування</td>
            <td>сек</td>
            <td>від 30</td>
          </tr>
          <tr>
            <td>Режим роботи</td>
            <td colSpan="2">Напівавтоматичний</td>
          </tr>
          <tr>
            <td>Робоча температура середовища</td>
            <td>град</td>
            <td>5…45</td>
          </tr>
          <tr>
            <td>Потужність вібрації</td>
            <td>кН</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Обслуговуючий персонал</td>
            <td>чол</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Продуктивність за зміну</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>- блок стіновий</td>
            <td>шт</td>
            <td>до 1400</td>
          </tr>
          <tr>
            <td>- бордюр</td>
            <td>м.п.</td>
            <td>до 900</td>
          </tr>
        </Tbody>
      </Table>
      <ProductionTitlePrincip>
        Основні переваги використання крокуючого вібропресу:
      </ProductionTitlePrincip>
      <ProductionTextPrincip>
        - відсутність технологічних піддонів;
      </ProductionTextPrincip>
      <ProductionTextPrincip>
        - організація виробництва будівельних матеріалів поряд із будівництвом
      </ProductionTextPrincip>
      <ProductionTextPrincip>
        - в теплу пору року можна організувати роботу на вібропресі просто неба
        на будівельному майданчику;
      </ProductionTextPrincip>
      <ProductionTextPrincip>
        - відпадає необхідність у додатковому устаткуванні (стелажі та піддони);
      </ProductionTextPrincip>
      <ProductionTextPrincip>
        - висока продуктивність (близько 1500 стінових блоків за зміну);
      </ProductionTextPrincip>
      <ProductionTextPrincip>
        - мінімум часу на проведення пуско-налагоджувальних робіт;
      </ProductionTextPrincip>
      <ProductionTextPrincip>
        - швидке, з мінімальними витратами для організації виробництва виробів
        на новому місці.
      </ProductionTextPrincip>
      <ProductionTextPrincip>
        За бажанням замовника за ескізами ми можемо виготовити будь-які
        прес-форми для пресуючого обладнання.
      </ProductionTextPrincip>
    </ProductionContainer>
  );
}
