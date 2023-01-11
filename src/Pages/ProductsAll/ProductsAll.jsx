import CardItem from '../../Components/CardItem/CardItem';
import Instagram from '../../Components/InstagramBlock/Instagram';
import { products } from '../../data/products';
import './ProductsAll.scss';

const ProductsAll = () => {
    return (
        <div className='products'>
            <div className="products__container">
                <img className='products-header-img' src="/icons/all-products.png" alt=""/>
                <div className="products-list">
                    {
                        products.map((item) => (
                            <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} />
                        ))
                    }
                </div>
                <Instagram/>

            </div>
            
        </div>
    );
};

export default ProductsAll;