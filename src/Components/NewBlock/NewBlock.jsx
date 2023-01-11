
import { newProducts } from '../../data/new';
import CardItem from '../CardItem/CardItem';
import PinkHeader from '../PinkHeader/PinkHeader';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll'
import './NewBlock.scss';

const NewBlock = () => {
    
    return (
        <>
      <PinkHeader pinkText={'НОВИНКИ'} doubleText={'НОВИНКИ'}/>
        <div className='new-cards'>
            {newProducts.map((item) => (
                <CardItem key={item.id} img={item.img} name={item.name} price={item.price} />
            ))}
        
      
        </div>
        <BtnWatchAll img={'/icons/watch-all.png'} text={'Cмотреть все'} />

<div>
        <img className='new-baner' src="/img/baner.png" alt=""/>
</div>
    
        
        </>
    );
};

export default NewBlock;