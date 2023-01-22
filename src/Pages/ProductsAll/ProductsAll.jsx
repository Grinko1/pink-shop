import { useSelector } from 'react-redux';
import CardItem from '../../Components/CardItem/CardItem';
import Instagram from '../../Components/InstagramBlock/Instagram';
import './ProductsAll.scss';

const ProductsAll = () => {
    const {products} = useSelector(state=>state.products)

    return (
        <div className='products'>
            <div className="products__container">
                <img className='products-header-img' src="/icons/all-products.png" alt=""/>
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

export default ProductsAll;