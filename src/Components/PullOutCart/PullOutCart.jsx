import { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import './PullOutCart.scss';

const PullOutCart = ({active, setActiveMenu }) => {
 
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActiveMenu(false)}>
       
        <div className="blur" />
        <div className="menu_content" onClick={(e) => e.stopPropagation()}>
          <div className="menu_header">
            <div className="btn-close" onClick={() => setActiveMenu(false)}>
              <img src="/icons/icon_close.png" alt=""/>
            </div>
            <h1>Корзина</h1>
          </div>
          <div className="cart_items">
            <div className="cart-item">
                <img className="cart-item__img" src="/img/bomber.png" alt=""/>
                <div className="cart-item__desc">
                    <h2>Бомбер Gone Crazy хаки</h2>
                    <p>S — M</p>
                    <p className="cart-item-price">2499 &#8381;</p>

                </div>
                <img className="cart-item-delete" src="/icons/pink-delete.png" alt=""/>
            </div>
            <div className="cart-item">
                <img className="cart-item__img" src="/img/bomber.png" alt=""/>
                <div className="cart-item__desc">
                    <h2>Бомбер Gone Crazy хаки</h2>
                    <p>S — M</p>
                    <p className="cart-item-price">2499 &#8381;</p>

                </div>
                <img className="cart-item-delete" src="/icons/pink-delete.png" alt=""/>
            </div>

            <div className="cart-item">
                <img className="cart-item__img" src="/img/bomber.png" alt=""/>
                <div className="cart-item__desc">
                    <h2>Бомбер Gone Crazy хаки</h2>
                    <p>S — M</p>
                    <p className="cart-item-price">2499 &#8381;</p>

                </div>
                <img className="cart-item-delete" src="/icons/pink-delete.png" alt=""/>
            </div>
           

            <div className="cart-item">
                <img className="cart-item__img" src="/img/bomber.png" alt=""/>
                <div className="cart-item__desc">
                    <h2>Бомбер Gone Crazy хаки</h2>
                    <p>S — M</p>
                    <p className="cart-item-price">2499 &#8381;</p>

                </div>
                <img className="cart-item-delete" src="/icons/pink-delete.png" alt=""/>
            </div>
  
           
            </div>
            <div className="cart-total">
            Сумма заказа: . . . . . .  4 998  &#8381;
            </div>
            <Link to='/order' onClick={() => setActiveMenu(false)}  >
            <BtnWatchAll img={'/icons/watch-all.png'} text={'Оформить заказ'} size={'l'}/>
            </Link>
      
        </div>
      </div>
    );
};

export default PullOutCart;