import { useState } from 'react';
import { Link } from 'react-router-dom';
import PullOutCart from '../PullOutCart/PullOutCart';
import PullOutMobileMenu from '../PullOutMobileMenu/PullOutMobileMenu';
import './MobileMenu.scss';

const MobileMenu = () => {
    const [activeCart, setActiveCart] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='mobile-menu show'>
      
             <div className='mobile-menu__item' onClick={() => setOpenMenu(!openMenu)}>
             <img src="/icons/icon_menu.png" alt=""/>
             <span>Меню</span>
             </div>
             <div className='mobile-menu__item' onClick={() => setActiveCart(!activeCart)} >
             <img src="/icons/cart.png" alt=""/>
             <span>Корзина</span>
             </div>
             <Link to='/favorite'>
             <div className='mobile-menu__item'>
             <img src="/icons/favorite.png" alt=""/>
             <span>Избранное</span>
             </div>
             </Link>
             
        <PullOutCart active={activeCart} setActiveMenu={setActiveCart}/>
        
         <PullOutMobileMenu active={openMenu} setActiveMenu={setOpenMenu}/>
        </div>
    );
};

export default MobileMenu;