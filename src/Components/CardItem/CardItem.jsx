
import { Link } from 'react-router-dom';
import './CardItem.scss';

const CardItem = ({img, name,price, id=1}) => {
    
    return (
        <div className='card-item'>
            <Link to={`/product/${id}`}>
            <img className='card-item_img' src={img} alt=""/>
            </Link>
           
            <hr className='card-item_hr'/>
            <img className='card-item_icon' src="/icons/card_favorite.png" alt=""/>
            <Link to={`/product/${id}`}>
            <div className="card-item-bottom">
                
                <div className="card-item-name">
            {name} </div>
                <div className="card-item-price">
                {price} &#8381;</div>
              
            </div>
            </Link>
             
           
        </div>
    );
};

export default CardItem;