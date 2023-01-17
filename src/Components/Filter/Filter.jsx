import { Link, useLocation } from 'react-router-dom';
import { subMenu } from '../../data/menu';
import Checkbox from '../Checkbox/Checkbox';
import './Filter.scss';


const Filter = () => {
  const {pathname} = useLocation()
    return (
        <div className='filter'>
           
            <h2 className='filter-neader'>КАТЕГОРИИ:</h2>
        <div className="filter-category">
        <ul className='filter-category__list'>
        {subMenu.map((item) => (
      <li key={item.id} className={pathname == item.link ?'category-item choozen' : 'category-item'}><Link to={item.link}>{item.name}</Link></li>
      ))}
        </ul>
        
       
        </div>
        <h2 className='filter-neader'>ЦЕНЫ:</h2>
        <div className="filter-price">
                    <Checkbox  > Все цены </Checkbox>
                    <Checkbox disabled > 500 — 1000 </Checkbox>
                    <Checkbox > 1000 — 1500 </Checkbox>
                    <Checkbox > от 1500 </Checkbox>   
        </div>
        <h2 className='filter-neader'>РАЗМЕР:</h2>
        <div className="filter-price">
      
                 
                    <Checkbox > XS — S </Checkbox>
                    <Checkbox > S — M </Checkbox>
                    <Checkbox > M — L </Checkbox>
                    <Checkbox > L — XL </Checkbox>
           
           
        </div>
        </div>
    );
};

export default Filter;