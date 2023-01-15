import { Link } from 'react-router-dom';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import CardItem from '../CardItem/CardItem';
import './PopularGoods.scss';

const PopularGoods = () => {
    return (
        <>
        <div className='popular-block'>
            <div className='popular-left'>
           
            <CardItem img={'/img/bomber.png'} name={'Бомбер Gone Crazy хаки'} price={2499}/>
            <CardItem img={'/img/suit1.png'} name={'Платье-футболка рыбы в аквариуме'} price={899}/>
            </div>
                <div className="popular-center">
                <img className="popular-center_img" src="/img/popularbaner.png" alt=""/>
                </div>
         <div className="popular-right">
         <CardItem img={'/img/dress.png'} name={'Платье прозрачное в цветочек черное'} price={1299}/>
         </div>
  
        </div>
      
      <Link to='/products'>
      <BtnWatchAll img={'/icons/popular-all.png'} text={'Cмотреть все'} />
      </Link>
       
        </>
    );
};

export default PopularGoods;