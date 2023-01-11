import BreadCrumps from '../../Components/BreadCrumps/BreadCrumps';
import Instagram from '../../Components/InstagramBlock/Instagram';
import './Delivery.scss';

const Delivery = () => {
    return (
        <div className='exchange'>
            <div  className='exchange__container'>
            <BreadCrumps/>
            <img className='exchange-header' src="/icons/delivery.png" alt=""/>
            <div className="exchange-desc">
            <div className="exchange-desc-item">
                <div className="exchange-desc-item__img">
                    <img src="/icons/delivery1.png" alt=""/>
                </div>
                <div className="exchange-desc-text">
                Доставка осуществляется Новой
                почтой день в  день при заказе
                до 18:00
                </div>

            </div>

            <div className="exchange-desc-item">
                <div className="exchange-desc-item__img">
                    <img src="/icons/delivery2.png" alt=""/>
                </div>
                <div className="exchange-desc-text">
                Курьерская доставка 500 руб
                </div>

            </div>

            <div className="exchange-desc-item">
                <div className="exchange-desc-item__img">
                    <img src="/icons/delivery3.png" alt=""/>
                </div>
                <div className="exchange-desc-text">
                Наложенный платеж на почте
                    дополнительно оплачивается
                        2% от суммы
                </div>

            </div>

            <div className="exchange-desc-item">
                <div className="exchange-desc-item__img">
                    <img style={{height:'100px'}} src="/icons/delivery4.png" alt=""/>
                </div>
                <div className="exchange-desc-text">
                При оплате онлайн никаких
                больше дополнительных
                процентов
                </div>

            </div>
               <div className="exchange-inst">
               <Instagram/>
                   </div>    
            </div>
            </div>
           
        </div>
    );
};

export default Delivery;