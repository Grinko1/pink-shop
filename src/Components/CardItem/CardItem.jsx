import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToFavorite, removeFromFavorite } from '../../store/favoriteSlice';
import { toggleFavorite } from '../../store/productsSlice';
import './CardItem.scss';

const CardItem = ({img, name,price, id=1, isFavorite}) => {

 
  
    const dispatch = useDispatch()

  

    const handleAddFavorited = ()=> {
        dispatch(addToFavorite({id, img, name,price, isFavorite:true}))
        dispatch(toggleFavorite({id}))
     
    
    }

    const handleDeleteFavorite = () => {
        dispatch(removeFromFavorite({id,  img, name,price,  isFavorite:false}))
        dispatch(toggleFavorite({id}))
 
         
    }
   
    
    return (
        <div className='card-item'>
            <Link to={`/product/${id}`}>
            <img className='card-item_img' src={img} alt=""/>
            </Link>
           
            <hr className='card-item_hr'/>
            {isFavorite 
            ? 
            <img className='card-item_icon' src="/icons/favorited.png" alt="" onClick={handleDeleteFavorite} />
            :
            <img className='card-item_icon' src="/icons/card_favorite.png" alt="" onClick={handleAddFavorited} />
            
        }
            
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