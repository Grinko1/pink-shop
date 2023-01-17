import Benefits from '../../Components/Benefits/Benefits';
import Instagram from '../../Components/InstagramBlock/Instagram';
import './Discounts.scss';

const Discounts = () => {
    return (
        <div className='discount'>
            <div className="discount__container">
                <img className='discount-header-icon' src="/icons/discount.png" alt="" />
                <div className="discount-programms">
                    <div className="discount-programm">
                        <div className="discount-programm__left">
                            <img src="/icons/discount1.png" alt="" />
                            <p className='discount-pink-tag'> #boorivagirls</p>
                            <p className='discount-big-text'>Первая покупка {'>'} 1099 руб* </p>
                            <p className='discount-small-text'>*вещь не находится на скидке</p>
                        </div>
                        <div className="discount-programm__right">
                            <p>5% бонусы от суммы чека</p>
                        <p>-30% скидка на одну вещь <br/>
                            за 3 дня до и 3 дня после 
                                дня рождения</p>
                                <p className='discount-small-pinktext'>*Баллами можно рассчитываться только
                                за те вещи, <br/> которые находятся не на скидке  </p>
                        </div>
                    </div>
                    <div className="discount-programm">
                        <div className="discount-programm__left">
                            <img src="/icons/discount2.png" alt="" />
                            <p className='discount-pink-tag'>  #boorivasis</p>
                            <p className='discount-big-text'>Сумма покупок {'>'} 5000 руб* </p>
                        </div>
                        <div className="discount-programm__right">
                            <p>10% бонусы от суммы чека</p>
                        <p>-30% скидка на одну вещь <br/>
                            за 3 дня до и 3 дня после 
                                дня рождения</p>
                                <p className='discount-small-pinktext'>*Баллами можно рассчитываться только
                                за те вещи, <br/> которые находятся не на скидке  </p>
                        </div>
                    </div>

                </div>
           
            </div>
            <Benefits/>
            <Instagram/>

        </div>
    );
};

export default Discounts;