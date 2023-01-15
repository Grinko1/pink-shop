import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BtnWatchAll from '../../Components/BtnWatchAll/BtnWatchAll';
import CartItems from '../../Components/CartItems/CartItems';
import './Order.scss';

const Order = () => {
    const {cartTotalAmount} = useSelector(state=>state.cartItems)
    console.log(cartTotalAmount);
    return (
        <div className='order'>
            <div className="order__container">
                <div className="order-block">
                    <div className="first-step step">
                        <div className="step-img">
                            <img src="/icons/first-step.png" alt=""/>
                        </div>
                        <div className="first-step-right step-info">
                            <label className='first-step-label'>
                              <input type="text" placeholder='Имя'/>
                            </label>
                            <label className='first-step-label'>
                              <input type="text" placeholder='Фамилия'/>
                            </label>
                            <label className='first-step-label'>
                              <input type="phone" placeholder='+7 (___) ___-__-__'/>
                            </label>
                            <label className='first-step-label'>
                              <input type="email" placeholder='E-mail'/>
                            </label>
                        </div>
                    </div>
                    <div className="second-step step">
                     <div className="step-img">
                            <img src="/icons/second-step.png" alt=""/>
                        </div>
                        <div className="second-step-right step-info">
                            <div className="form_radio">
	                             <input id="radio-1" type="radio" name="radio"  />
	                            <label htmlFor="radio-1">Доставка в отделение Новой почты —
                                <br/> <span className='pink-link'>согласно тарифам НП</span> </label>
                            </div>
                            <div className="form_radio">
	                             <input id="radio-2" type="radio" name="radio"  />
	                            <label htmlFor="radio-2">Курьерская доставка Новой почты — 
                                <br/> <span className='pink-link'>согласно тарифам НП</span> </label>
                            </div>

                            <div className="form_radio">
	                             <input id="radio-3" type="radio" name="radio"  />
	                            <label htmlFor="radio-3">Международная доставка —
                                <br/> <span className='pink-link'>согласно тарифам Укрпочта</span> </label>
                            </div>

                            <div className="form_radio">
	                             <input id="radio-4" type="radio" name="radio"  />
	                            <label htmlFor="radio-4">Самовывоз с нашего шоурума 
                                 —  <br/> <span className='pink-link'>бесплатно</span> </label>
                            </div>
                            <p className='second-step-adress'>г.Киев,  ул. Нижний вал, 37 <br/>
                                Ежедневно с 11:00 до 21:00</p>
                                <textarea className='second-step-textarea' name="" id="" cols="40" rows="5" placeholder='Комментарий к заказу'></textarea>


                            
                            
                        </div>
                    </div>
                    <div className="third-step step">
                        <div className="step-img">
                            <img src="/icons/third-step.png" alt=""/>
                        </div>
                        <div className="second-step-right step-info">
                            <div className="form_radio radio-center ">
	                             <input id="radio-5" type="radio" name="radio"  />
	                            <label htmlFor="radio-5">Каротой Visa / MasterCard </label>
                            </div>
                            <div className="form_radio radio-center ">
	                             <input id="radio-6" type="radio" name="radio"  />
	                            <label htmlFor="radio-6">Наличкой при получении </label>
                            </div>

                            <label className='first-step-label'>
                              <input type="text" placeholder='Номер карты  boorivasis'/>
                            </label>
                            <div className="form_radio small-radio ">
	                             <input id="radio-7" type="radio" name="radio"  />
	                            <label htmlFor="radio-7">Я уверена в заказе, со мной можно <br/> не связываться </label>
                            </div>
 
                            
                            
                        </div>
                        
                    </div>
                    <div className="order-btn">
                        <Link to='/thanks-for-order'>
                        <BtnWatchAll img={'/icons/watch-all.png'} text={'Подтвердить заказ'} size={'l'} />
                        </Link>
             
                    </div>

                </div>
                <div className="order-cart-block">

                    <CartItems/>
                    <div className="order-cart-subtotal">
                        
                        <p> <span>Cумма заказа:</span>  <span className="order-cart-subtotal__price" >{cartTotalAmount}</span></p>
                        <p> <span>Стоимость доставки:</span> <span className="order-cart-subtotal__price" >Бесплатно</span> </p>
                    </div>
                    <div className="order-cart-total">
                    Сумма заказа: . . . . . . <span> {cartTotalAmount} &#8381;</span> 
                    </div>
               
                </div>
            </div>
            
        </div>
    );
};

export default Order;