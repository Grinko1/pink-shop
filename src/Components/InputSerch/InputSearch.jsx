import './InputSearch.scss';

const InputSearch = ({setIsOpenSearch}) => {
    return (
        <div className="header-search-block" onClick={() => setIsOpenSearch(false)}>
        <div className="header-search-main" onClick={e=> e.stopPropagation()} >
          <img src="/icons/search-grey.png" alt=""/>
          <input className="header-search-input" placeholder='Поиск товаров'  type="text"/>
          <img className='header-search-delete' src="/icons/delete.png" alt=""/>
        </div>
      </div>
    );
};

export default InputSearch;