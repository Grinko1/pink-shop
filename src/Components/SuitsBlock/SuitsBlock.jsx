import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import PinkHeader from '../PinkHeader/PinkHeader';
import './SuitsBlock.scss';

const SuitsBlock = () => {
    return (
        <>
        <div className='suits-block'>
            <PinkHeader pinkText={'Костюмы'} doubleText={'Костюмы'}/>
            <div className="suits-items">
                <div className="suits-item">
                    <img className='suit_img' src="/img/suit2.png" alt=""/>
                    <img className='suit_price1 suit' src="/icons/price1.png" alt=""/>
                    <span className='suit_price1 suit-price '>1099 &#8381;</span>

                    <img className='suit_price2 suit' src="/icons/price2.png" alt=""/>
                    <span className='suit_price2 suit-price'>899 &#8381;</span>
                </div>
                <div className="suits-item">
                    <img className='suit_img' src="/img/suit3.png" alt=""/>
                    <img className='suit_price3 suit' src="/icons/price2.png" alt=""/>
                    <span className='suit_price3 suit-price'>899 &#8381;</span>

                    <img className='suit_price4 suit' src="/icons/price1.png" alt=""/>
                    <span className='suit_price4 suit-price'>1899 &#8381;</span>
                </div>
                <div className="suits-item">
                    <img className='suit_img' src="/img/suit4.png" alt=""/>
                    <img className='suit_price5 suit' src="/icons/price1.png" alt=""/>
                    <span className='suit_price5 suit-price'>1899 &#8381;</span>

                    <img className='suit_price6 suit' src="/icons/price2.png" alt=""/>
                    <span className='suit_price6 suit-price'>1099 &#8381;</span>
                </div>
                <div className="suits-item">
                    <img className='suit_img' src="/img/suit5.png" alt=""/>
                    <img className='suit_price7 suit' src="/icons/price2.png" alt=""/>
                    <span className='suit_price7 suit-price'>1099 &#8381;</span>

                    <img className='suit_price8 suit' src="/icons/price1.png" alt=""/>
                    <span className='suit_price8 suit-price'>1899 &#8381;</span>
                </div>
            </div>
            
        </div>
        <BtnWatchAll img={'/icons/watch-all.png'} text={'Cмотреть все'}/>
        </>
    );
};

export default SuitsBlock;