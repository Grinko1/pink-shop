import NavMenu from '../NavMenu/NavMenu';
import './Header.scss';

const Header = () => {
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
            <img src="/icons/logo.png" alt="" className='header-logo_img'/>
            </div>
            <div className='header_block'>
            <img src="/icons/search.png" alt="" className='header-icon pink'/>
          <p>Поиск</p>
            </div>
          <div className='header_right-block'>
          <img src="/icons/favorite.png" alt="" className='header-icon '/>
          <img src="/icons/bag.png" alt="" className='header-icon '/>
          </div>
        </header>
        <NavMenu/>
        </>
    );
};

export default Header;