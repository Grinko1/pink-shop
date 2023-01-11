import { Link } from 'react-router-dom';
import  './SubCategory.scss';

const SubCategory = () => {
    return (
        <nav className='subcategory'>
            <ul className='subcategory-list'>
                <li className='subcategory-list_item'>
                    <Link>Комбинезоны</Link></li>
                <li className='subcategory-list_item'><Link >Пиджаки</Link></li>
                <li className='subcategory-list_item'><Link >Рубашки</Link></li>
                <li className='subcategory-list_item'><Link >Свитшоты</Link></li>
                <li className='subcategory-list_item'><Link >Худи</Link></li>
                <li className='subcategory-list_item'><Link >Топы</Link></li>
                <li className='subcategory-list_item'><Link >Футболки</Link></li>
            </ul>
        </nav>
    );
};

export default SubCategory;