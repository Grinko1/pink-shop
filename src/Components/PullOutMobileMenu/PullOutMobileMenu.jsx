import { Link } from 'react-router-dom';
import { menuArr } from '../../data/menu';
import './PullOutMobileMenu.scss';

const PullOutMobileMenu = ({active, setActiveMenu }) => {


 
    return (
        <div className={active ? 'menu-mobile active' : 'menu-mobile'} onClick={() => setActiveMenu(false)}>
       
        <div className="blur" />
        <div className="menu_content" onClick={(e) => e.stopPropagation()}>
          <div className="menu_header">
            <div className="btn-close" onClick={() => setActiveMenu(false)}>
              <img src="/icons/close-menu.png" alt=""/>
            </div>
           
            <ul className="menu-items">
            <h1 className='menu-mobile-header'>Меню</h1>
            {
              menuArr.map((i)=>(
                <Link to={i.link} key={i.id} onClick={() => setActiveMenu(false)}>
                <li className="menu-item">
                  {i.name}
                </li>
                </Link>
              ))
            }
            </ul>
            <ul className="menu-items menu-subitems">
              <li className="menu-item">
                <Link to='/contacts' onClick={() => setActiveMenu(false)}>Контакты</Link>            
              </li>
              <li className="menu-item">
                <Link to='/discounts'onClick={() => setActiveMenu(false)} >Система лояльности</Link>            
              </li>
              <li className="menu-item">
                <Link to='/exchange' onClick={() => setActiveMenu(false)} >Обмен и возврат</Link>            
              </li>
              <li className="menu-item">
                <Link to='/delivery' onClick={() => setActiveMenu(false)}>Доставка и оплата</Link>            
              </li>


            </ul>
         
          </div>
   
          
      
        </div>
      </div>
    );
};

export default PullOutMobileMenu;