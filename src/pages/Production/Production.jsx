import {
  ProductionContainer,
  ProductionText,
  ProductionTitel,
  ProductionLink,
  DescriptionTitle,
  Table,
  TheadBox,
  TheadTitle,
  HeadTr,
  Tbody,
  PtoductionImg,
} from './Production.styled';

export default function Production() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>Вібропрес PGV-120U(М)</ProductionTitel>
        <DescriptionTitle>
          Обладнання для виробництва тротуарної плитки, блоків, бордюру, цегли
        </DescriptionTitle>
        <ProductionLink>
          https://www.youtube.com/watch?v=9W0KVP3kHLE
        </ProductionLink>
        <PtoductionImg>
          <figure>
            <img
              src={process.env.PUBLIC_URL + '/imgs/production/1.jpg'}
              alt="Вібропрес PGV-120U "
            />
            <figure>Рис. 1 Вібропрес PGV-120U</figure>
          </figure>
          <figure>
            <img
              src={process.env.PUBLIC_URL + '/imgs/production/2.jpg'}
              alt="Вібропрес PGV-120U "
            />
            <figure>Рис. 2 Вібропрес PGV-120М</figure>
          </figure>
        </PtoductionImg>
      </div>
      <div>
        <ProductionText>
          ТДВ «Моторика-Юг» пропонує універсальний вібропрес PGV-120U(М) -
          напівавтоматична установка, яка потребує ручного завантаження матриці,
          з формовочною зоною 0,36м2. Обладнання, призначене для виготовлення
          методом вібропресування фігурних елементів мощення – тротуарної
          плитки, різної конфігурації та товщини (від 30 до 300 мм), а також
          елементів ландшафтної архітектури – тротуарний поребрик, бордюр
          дорожній, блоки,·бетонні вироби.
        </ProductionText>
        <ProductionText>Принцип роботи вібропресу:</ProductionText>
        <ProductionText>
           у матрицю прес-форми вручну засипається напівсухий бетон;  для
          укладання фактурного шару, на кілька секунд включається нульова
          вібрація;  засипається фактурний шар бетону (за необхідності);  з
          опусканням пуансона, включається основна вібрація;  відбувається
          розпалубка виробу і він потрапляє в пропарочну камеру (або її аналог);
        </ProductionText>
        <ProductionText>
          Надійність вібропресу, простота в управлінні та обслуговуванні, а
          також його універсальність гарантують ефективний початок будівельної
          діяльності та дозволяють успішно розвиватися цьому бізнесу.
        </ProductionText>
      </div>
      <TheadTitle>Основні технічні характеристики</TheadTitle>

      <Table>
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
            <td>7</td>
          </tr>
          <tr>
            <td>Напруга</td>
            <td>Вольт</td>
            <td>380</td>
          </tr>
          <tr>
            <td>Розмір формовочної зони</td>
            <td>мм</td>
            <td>750х750</td>
          </tr>
          <tr>
            <td>Висота виробів (мін/макс)</td>
            <td>мм</td>
            <td>30/300</td>
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
            <td>Потужність вібрації PGV-120U(М)</td>
            <td>кН</td>
            <td>30/40</td>
          </tr>
          <tr>
            <td>Обслуговуючий персонал</td>
            <td>чол</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Продуктивність за зміну</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>- тротуарна плитка</td>
            <td>кв.м</td>
            <td>до 120</td>
          </tr>
          <tr>
            <td>- блок стіновий</td>
            <td>шт</td>
            <td>до 1300</td>
          </tr>
          <tr>
            <td>- бордюр</td>
            <td>м.п.</td>
            <td>до 420</td>
          </tr>
        </Tbody>
      </Table>
    </ProductionContainer>
  );
}
