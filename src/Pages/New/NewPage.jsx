import { useSelector } from 'react-redux';
import CardItem from '../../Components/CardItem/CardItem';
import Instagram from '../../Components/InstagramBlock/Instagram';
import PinkHeader from '../../Components/PinkHeader/PinkHeader';

import './NewPage.scss';

const NewPage = () => {
    const products = useSelector(state => state.products.products)

    return (
        <div className='products'>
            <div className="products__container">
                <PinkHeader pinkText={'НОВИНКИ'} doubleText={'НОВИНКИ'}/>
                <div className="products-list">
                    {
                        products.map((item) => (
                            <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} isFavorite={item.isFavorite} />
                        ))
                    }
                </div>
                <Instagram/>

            </div>
            
        </div>
    );
};

export default NewPage;