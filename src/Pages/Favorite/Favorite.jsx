import { useState } from 'react';
import Benefits from '../../Components/Benefits/Benefits';
import BreadCrumps from '../../Components/BreadCrumps/BreadCrumps';
import CardItem from '../../Components/CardItem/CardItem';
import Instagram from '../../Components/InstagramBlock/Instagram';
import PinkHeader from '../../Components/PinkHeader/PinkHeader';
import ModalEmptyFavorite from '../../Components/ModalEmptyFavorite/ModalEmptyFavorite'
import './Favorite.scss';
import { useSelector } from 'react-redux';

const Favorite = () => {

  const favoriteItems = useSelector(state => state.favoriteItems.favoriteItems)


 
    return (
        <div className='favorite'>
            {
                favoriteItems.length == 0 
                ?
                <ModalEmptyFavorite/>
                :
                <div className="favorite-container">
                <BreadCrumps/>
                <PinkHeader pinkText={'список желаний'} doubleText={'желания'} />
                <div className='favorite-items'>
                    {
                        favoriteItems.map((item) => (
                            <CardItem img={item.img} name={item.name} price={item.price} id={item.id} key={item.id} isFavorite={item.isFavorite} />
                        ))
                    }
             
                </div>
                <Benefits/>
                <Instagram/>
    
                </div>
            }
            
           
        
           
            
        </div>
    );
};

export default Favorite;