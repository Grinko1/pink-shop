import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputSearch from '../InputSerch/InputSearch';
import NavMenu from '../NavMenu/NavMenu';
import PullOutCart from '../PullOutCart/PullOutCart';
import './Header.scss';

const Header = () => {
 const [isOpenSearch, setIsOpenSearch] = useState(false)
 const [activeMenu, setActiveMenu] = useState(false)

 console.log(activeMenu, 'activeMenu');
 const openSearch = () => {
  setIsOpenSearch(true)
 }

    return (
      <>
        <header className='header'>
          <div className="header_left-block">
          <div className='header_block pink'>
            <img src="/icons/map.png" alt="" className='header-icon '/>
          <p>Рижская,22</p>
            </div>
            <div className='header_block pink'>
            <img src="/icons/phone.png" alt="" className='header-icon ' />
          <p>+71234567890</p>
            </div>
          </div>
           
            <div className='header_block'>
              <Link to='/'>
              <img src="/icons/logo.png" alt="" className='header-logo_img'/>
              </Link>
            
            </div>
            <div className='header_block ' onClick={openSearch}>
            <img src="/icons/search.png" alt="" className='header-icon pink'/>
          <p>Поиск</p>
            </div>
          <div className='header_right-block'>
            <Link to='/favorite'>
            <img src="/icons/favorite.png" alt="" className='header-icon '/>
            </Link>
          
          <img src="/icons/bag.png" alt="" className='header-icon ' onClick={() => setActiveMenu(!activeMenu)} />
          <PullOutCart active={activeMenu} setActiveMenu={setActiveMenu}/>
        
          
          </div>
        </header>
        {
          isOpenSearch ? 
          <InputSearch setIsOpenSearch={setIsOpenSearch} />
          :
          <NavMenu/>
        }
        
        </>
    );
};

export default Header;