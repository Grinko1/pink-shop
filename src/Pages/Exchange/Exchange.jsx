import Instagram from '../../Components/InstagramBlock/Instagram';
import './Exchange.scss';

const Exchange = () => {
    return (
        <div className='exchange'>
            <div  className='exchange__container'>
            <img className='exchange-header' src="/icons/exchange.png" alt=""/>
            <div className="exchange-desc">
            <div className="exchange-desc-item">
                <div className="exchange-desc-item__img">
                    <img src="/icons/exchange1.png" alt=""/>
                </div>
                <div className="exchange-desc-text">
                Вы легко можете обменять либо вернуть вещь в течение 14 дней после покупки, если вещь не была в носке и не стиралась. Для этого свяжитесь с нами любым удобным способом.
                </div>

            </div>

            <div className="exchange-desc-item">
                <div className="exchange-desc-item__img">
                    <img src="/icons/exchange2.png" alt=""/>
                </div>
                <div className="exchange-desc-text">
                При обмене, мы отправляем вещь 
                в тот же либо на следующий день,  
                    после того как забрали вещь с почты.
                </div>

            </div>

            <div className="exchange-desc-item">
                <div className="exchange-desc-item__img">
                    <img src="/icons/exchange3.png" alt=""/>
                </div>
                <div className="exchange-desc-text">
                Вещи, которые вы отправляете нам,  мы забираем с почты 2 раза в неделю.
                </div>

            </div>

            <div className="exchange-desc-item">
                <div className="exchange-desc-item__img">
                    <img src="/icons/exchange4.png" alt=""/>
                </div>
                <div className="exchange-desc-text">
                При возврате, деньги возвращаются  в течение 5 рабочих дней,
                 после того как забрали вещь с почты и получили реквизиты для возврата.
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

export default Exchange;