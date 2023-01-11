import './Filter.scss';
// КАТЕГОРИИ:
// Платья
// Верх
// Низ
// Куртки
// Все товары
// Бомберы
// Джинсовки
// Дождевики
// Куртки
// Пальта
// Пуховики
// Тренчи
// Мелочи
// Костюмы
// ЦЕНЫ:
// Все цены
// до 500
// 500 — 1000
// 1000 — 1500
// от 1500
// РАЗМЕР:
// XS — S
// S — M
// M — L
// L — XL

const Filter = () => {
    return (
        <div className='filter'>
           
            <h2 className='filter-neader'>КАТЕГОРИИ:</h2>
        <div className="filter-category">
        <details className='filter-category_details'>
          <summary>Платья</summary>
          <p>скрытый текст</p>
        </details>
        <details className='filter-category_details'>
          <summary>Верх
              <img className='filter-category_img' src="/icons/open.png" alt=""/>
          </summary>
          <p>скрытый текст</p>
        </details>
        <details className='filter-category_details'>
          <summary>Низ
              <img className='filter-category_img' src="/icons/open.png" alt=""/>
          </summary>
          <p>скрытый текст</p>
        </details>
        <details className='filter-category_details'>
          <summary>Куртки
              <img className='filter-category_img' src="/icons/open.png" alt=""/>
          </summary>
          <p>Все товары</p>
          <p>Бомберы</p>
          <p>Джинсовки</p>
          <p>Дождевики</p>
          <p>Куртки</p>
          <p>Пуховики</p>
        </details>
        </div>
        <h2 className='filter-neader'>ЦЕНЫ:</h2>
        <div className="filter-price">
            <label className='filter-price-item'>
            <input type="checkbox"/>
            Все цены
            </label >
            <label className='filter-price-item'>
            <input type="checkbox"/>
            500 — 1000
            </label>
            <label className='filter-price-item'>
            <input type="checkbox"/>
            1000 — 1500
            </label>
            <label className='filter-price-item'>
            <input type="checkbox"/>
            от 1500
            </label>
           
           
        </div>
        <h2 className='filter-neader'>РАЗМЕР:</h2>
        <div className="filter-price">
            <label className='filter-price-item'>
            <input type="checkbox"/>
            XS — S
            </label>
            <label className='filter-price-item'>
            <input type="checkbox"/>
            S — M
            </label>
            <label className='filter-price-item'>
            <input type="checkbox"/>
            M — L
            </label>
            <label className='filter-price-item'>
            <input type="checkbox"/>
            L — XL
            </label>
           
           
        </div>
        </div>
    );
};

export default Filter;