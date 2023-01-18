import { Link, useLocation } from 'react-router-dom';
import { subMenu } from '../../data/menu';
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../Radio/Radio';
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
              
                    <Radio id='price1' htmlFor='price1' name='price' oneLine>
                    Все цены
                    </Radio>
                    <Radio id='price2' htmlFor='price2' name='price' oneLine>
                    500 — 1000
                    </Radio>
                    <Radio id='price3' htmlFor='price3' name='price' oneLine>
                    1000 — 1500
                    </Radio>
                    <Radio id='price4' htmlFor='price4' name='price' oneLine>
                    от 1500
                    </Radio>
        </div>
        <h2 className='filter-neader'>РАЗМЕР:</h2>
        <div className="filter-price">
      
              
                    <Radio id='size1' htmlFor='size1' name='size' oneLine>
                    XS — S
                    </Radio>
                    <Radio id='size2' htmlFor='size2' name='size' oneLine>
                    S — M
                    </Radio>
                    <Radio id='size3' htmlFor='size3' name='size' oneLine>
                    M — L
                    </Radio>
                    <Radio id='size4' htmlFor='size4' name='size' oneLine>
                    L — XL
                    </Radio>

                      
        </div>
        </div>
    );
};

export default Filter;