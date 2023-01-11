import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import './AboutShop.scss';

const AboutShop = () => {
   
    return (
        <>
        <div className='shop-block'>
            <h1 className='shop-block_header'>BOORIVA <br/> STORE</h1>
            <div className="shop-block_img">
            <img className='shop_img' src="/img/shop.png" alt=""/>
            </div>

            <p className='shop-block-desc'>Ты можешь заказать примерку  понравившейся вещи или просто заглянуть, гуляя по Подолу, 
                    и примерять что-то 
                из в наличии</p>
            <p className='shop-block-address'> г.Киев,  ул. Нижний вал, 37  <br/> 
                  Ежедневно с 11:00 до 21:00
            </p>

        <img className='shop-mapimg' src="/img/map.png" alt=""/>

        </div>


        <div className='shop-getdirection'>
        <BtnWatchAll img={'/icons/get-direction.png'} text={'проложить маршрут'} size={'l'}/>
            </div>

        </>

    );
};

export default AboutShop;