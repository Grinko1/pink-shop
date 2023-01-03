import './NavMenu.scss';

const NavMenu = () => {
  const menuArr = [
    {id:1, name:'Новинки'},
    {id:2, name:'Платья'},
    {id:3, name:'Верх'},
    {id:4, name:'Низ'},
    {id:5, name:'куртки'},
    {id:6, name:'Мелочи'},
    {id:7, name:'Костюмы'},
    {id:8, name:'#Boorivagirls'},
  ]
    return (
   <nav className='navbar'>
     <ul className='menu_links'>
     {
       menuArr.map((menu) => (
         <li className='menu_link-item' key={menu.id}>{menu.name}</li>
       ))
     }
     </ul>
     
   </nav>
    );
};

export default NavMenu;