import { Link } from 'react-router-dom';
import './NavMenu.scss';

const NavMenu = () => {
  const menuArr = [
    {id:1, name:'Новинки', link:'/new'},
    {id:2, name:'Платья', link:'products/dresses'},
    {id:3, name:'Верх', link:'products/top'},
    {id:4, name:'Низ', link:'products/bottom'},
    {id:5, name:'куртки', link:'products/jackets'},
    {id:6, name:'Мелочи', link:'products/things'},
    {id:7, name:'Костюмы', link:'/products/suits'},
    {id:8, name:'#Boorivagirls', link:'/boorivagirls'},
  ]
    return (
   <nav className='navbar'>
     <ul className='menu_links'>


     {
       menuArr.map((menu) => (
         <li className='menu_link-item' key={menu.id}>
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