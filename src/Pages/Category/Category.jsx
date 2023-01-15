import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader';
import Filter from '../../Components/Filter/Filter';
import SubCategory from '../../Components/SubCategory/SubCategory';
import CardItem from '../../Components/CardItem/CardItem'
import InstagramBlock from '../../Components/InstagramBlock/Instagram'
import { newProducts } from '../../data/new';
import './Category.scss';
import { useSelector } from 'react-redux';


const Category = () => {
    const products = useSelector(state => state.products.products)
    console.log(products);
  
    return (
        <div className='catogory-container'>
            <SubCategory/>
            <CategoryHeader/>
            <div className="category-main">
                <div className='category-filter'>
                <Filter/>
                </div>
                <div className="category-products">
                {products.map((item) => (
                    <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} isFavorite={item.isFavorite} />
                ))}
                </div>
            </div>
            <InstagramBlock/>
            
           
        </div>
    );
};

export default Category;