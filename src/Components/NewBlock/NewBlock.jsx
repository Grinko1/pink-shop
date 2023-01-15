
// import { newProducts } from '../../data/new';
import CardItem from '../CardItem/CardItem';
import PinkHeader from '../PinkHeader/PinkHeader';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll'
import './NewBlock.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewBlock = () => {
    const newProducts = useSelector(state => state.products.new)
    console.log(newProducts);
   
    return (
        <div>
      <PinkHeader pinkText={'НОВИНКИ'} doubleText={'НОВИНКИ'}/>
        <div className='new-cards'>
            {newProducts.map((item) => (
                <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} isFavorite={item.isFavorite} />
            ))}
        
      
        </div>
        <Link to='/new'>
        <BtnWatchAll img={'/icons/watch-all.png'} text={'Cмотреть все'} />
        </Link>
       

<div>
        <img className='new-baner' src="/img/baner.png" alt=""/>
</div>
    
        
        </div>
    );
};

export default NewBlock;