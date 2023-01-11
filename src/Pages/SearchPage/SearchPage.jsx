import CardItem from '../../Components/CardItem/CardItem';
import { newProducts } from '../../data/new';
import './SearchPage.scss';

const SearchPage = () => {
    return (
        <div className='search'>
            <div className="search__container">
                <img src="/icons/allresult.png" alt=""/>
                <div className="search-results">
                    {
                        newProducts.map((item) => (
                            <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} />
                        ))
                    }
                </div>

            </div>
            
        </div>
    );
};

export default SearchPage;