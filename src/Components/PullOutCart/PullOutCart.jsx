import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import CartItems from '../CartItems/CartItems';
import './PullOutCart.scss';

const PullOutCart = ({active, setActiveMenu }) => {

  const {cartItems, cartTotalAmount} = useSelector(state=>state.cartItems)

 
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
          {
            cartItems.length == 0 ?
            <>
            <div className='empty-cart'>
              <img src="/icons/emptycart.png" alt=""/>
              <p>Твоя корзина пуста, но это никогда
                 <br/> не поздно исправить:)</p>

            </div>
            <Link to='/'  onClick={() => setActiveMenu(false)} >
            <BtnWatchAll img={'/icons/watch-all.png'} text={'За покупками'} size={'l'}/>
            </Link>
  
            </>
            :
            <>
            <CartItems/>
   
              <div className="cart-total">
              Сумма заказа: . . . . . . {cartTotalAmount} &#8381;
                </div>
          <Link to='/order' onClick={() => setActiveMenu(false)}  >
              <BtnWatchAll img={'/icons/watch-all.png'} text={'Оформить заказ'} size={'l'}/>
           </Link>
            </>
          }
          
      
        </div>
      </div>
    );
};

export default PullOutCart;