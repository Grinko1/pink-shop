import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader';
import Filter from '../../Components/Filter/Filter';
import CardItem from '../../Components/CardItem/CardItem'
import InstagramBlock from '../../Components/InstagramBlock/Instagram'
import './Category.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const Category = () => {

    const {products} = useSelector(state => state.products)
    const [filteredProducts, setFilteredProducts] =useState([])

    const [price, setPrice] = useState('')

    useEffect(()=>{
        setFilteredProducts(products)
    },[products])
  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }

  useEffect(() => {  
        if(price === ''){
    setFilteredProducts(products)
     }
     
     if(price === '1000 — 1500'){
         setFilteredProducts(products.filter((item) => {
            return item.price < 1500
         }))
     } else if(price ==='from 1500') {
         setFilteredProducts(products.filter((item) => {
             return item.price > 1500
          }))
     }else if(price ==='all price'){
         setFilteredProducts(products)
     }
},[price, products])
  
  
    return (
        <div className='catogory-container'>
            <CategoryHeader/>
            <div className="category-main">
                <div className='category-filter'>
                <Filter handleChangePrice={handleChangePrice}/>
                </div>
                <div className="category-products">
                {filteredProducts.map((item) => (
                    <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} isFavorite={item.isFavorite} />
                ))}
                </div>
            </div>
            <InstagramBlock/>     
        </div>
    );
};

export default Category;