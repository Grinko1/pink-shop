import { Link, useLocation } from 'react-router-dom';
import { menuArr } from '../../data/menu';
import './NavMenu.scss';

const NavMenu = () => {
  const {pathname} = useLocation()
 
    return (
   <nav className='navbar'>
     <ul className='menu_links'>


     {
       menuArr.map((menu) => (
         <li className= {menu.link == pathname.substring(1) ? 'menu_link-item choozen' : 'menu_link-item'} key={menu.id}>
           <Link className='menu_link-item_link' to={menu.link}>{menu.name}</Link>
           </li>
       ))
     }
     </ul>
     <hr className='navbar-hr'/>
   </nav>
    );
};

export default NavMenu;