import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputSearch from '../InputSerch/InputSearch';
import './Header.scss';

const MobileHeader = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const openSearch = () => {
        setIsOpenSearch(true)
       }
    return (
        <>
        <div className='mobileMenu'>
            <div className='mobileMenu-logo'>
                <Link to='/'>
                <img src="/icons/logo.png" alt="" className='header-logo_img'/>
                </Link>
         
            </div>
        
         <div className='mobileMenu-right'>
                <img src="/icons/phone.png" alt="" className='header-icon ' />
              <p className='pink'>+71234567890</p>
              <img src="/icons/search.png" alt="" className='header-icon end' onClick={openSearch}/>
          </div>
                
            
        </div>
        {
          isOpenSearch ? 
          <InputSearch setIsOpenSearch={setIsOpenSearch} />
          :
          ''
        }
        </>
    );
};

export default MobileHeader;