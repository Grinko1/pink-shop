import { useSelector } from 'react-redux';
import CardItem from '../../Components/CardItem/CardItem';
import Instagram from '../../Components/InstagramBlock/Instagram';
import PinkHeader from '../../Components/PinkHeader/PinkHeader';
import { newProducts } from '../../data/new';
import './SearchPage.scss';

const SearchPage = () => {
    const {searchable} = useSelector(state => state.products)
    return (
        <div className='search'>
            <div className="search__container">
             
                {
                    searchable.length > 0 ?
                    <>
                    <PinkHeader pinkText={'Все результаты'} doubleText={'результаты'}/>
                <div className="search-results">
                    {
                        searchable.map((item) => (
                            <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} />
                        ))
                    }
                </div>
                    </>
                    :
                    <div className='search-notfound'>
                        <img src="/icons/emptycart.png" alt=""/>
                       <p>По вашему запросу ничего не найдено</p> 
                        </div>
                }
                




                        <Instagram/>
                <PinkHeader pinkText={'Могут понравиться'} doubleText={'Могут понравиться'}/>
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