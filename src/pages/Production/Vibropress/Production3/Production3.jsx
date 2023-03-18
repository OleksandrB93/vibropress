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
} from './Production3.styled';

export default function Production3() {
  return (
    <ProductionContainer>
      <div>
        <ProductionTitel>АВТОМАТИЧНИЙ Вібропрес PGV-400</ProductionTitel>
        <DescriptionTitle>
          Обладнання для виробництва тротуарної плитки, блоків, бордюру, цегли
        </DescriptionTitle>
        <PtoductionImg>
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                '/imgs/production/vibropress/product3.jpg'
              }
              alt="Вібропрес PGV-120U "
            />
            <figure>Вібропрес PGV-400</figure>
          </figure>
        </PtoductionImg>
      </div>
      <div>
        <ProductionText>
          Вібропреси серії PGV-400 є високопродуктивними і здатні виробляти
          широкий асортимент продукції на формовочній зоні 0,36 кв.м.
          Стаціонарний вібропрес PGV-400 дає можливість організувати
          універсальне виробництво високоякісних виробів із бетону. Даний
          вібропрес - це ідеальне рішення для виробників дрібноштучних виробів з
          бетону при виробництві середньої потужності. Вартість капіталовкладень
          дуже незначна.
        </ProductionText>
        <ProductionText>
          Модель PGV-400 призначена для виготовлення продукції висотою від 30 мм
          до 300 мм і таким чином пропонує широкий вибір виробів для дорожнього
          та висотного будівництва, а також садово-паркового оформлення. Надійна
          система ущільнення з вібростолом, сучасна гідравліка,
          електроуправління та інноваційна Touch-Panel забезпечують високу
          надійність виробництва та просте обслуговування вібропресу.
        </ProductionText>
        <ProductionText>
          Інтеграцією вібропресу у виробничу систему можна автоматизувати весь
          виробничий процес від підготовки бетону до упакованного піддону з
          продукцією. При цьому ступінь автоматизації обладнання може бути
          виконана з урахуванням локальних умов від простого завантаження
          піддонів навантажувачем до повністю автоматичного рішення з
          інтегрованими лініями обробки поверхні каменю. Також можливий
          поетапний розвиток, а відтак і інвестування. У тісній співпраці, наші
          досвідчені інженери дадуть Вам рекомендації щодо варіанта, який
          найкраще відповідатиме Вашим вимогам та тенденціям ринку.
        </ProductionText>

        <ProductionTextPrincip>
          У стандартну комплектацію входять вібропрес, системи транспортування
          піддонів, системи транспортування та обробки виробів, автоматизація.
        </ProductionTextPrincip>
      </div>
      <TheadTitle>Основні технічні характеристики</TheadTitle>
      <Table style={{ marginBottom: '50px' }}>
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
