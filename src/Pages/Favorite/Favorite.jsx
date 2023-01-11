import { useState } from 'react';
import Benefits from '../../Components/Benefits/Benefits';
import BreadCrumps from '../../Components/BreadCrumps/BreadCrumps';
import CardItem from '../../Components/CardItem/CardItem';
import Instagram from '../../Components/InstagramBlock/Instagram';
import PinkHeader from '../../Components/PinkHeader/PinkHeader';
import ModalEmptyFavorite from '../../Components/ModalEmptyFavorite/ModalEmptyFavorite'
import './Favorite.scss';

const Favorite = () => {
    const [emptyFavorite, setEmptyFavorite] = useState(true)
    const [active, setActive] = useState(true)
 
    return (
        <div className='favorite'>
            {
                emptyFavorite 
                ?
                <ModalEmptyFavorite/>
                :
                <div className="favorite-container">
                <BreadCrumps/>
                <PinkHeader pinkText={'список желаний'} doubleText={'желания'} />
                <div className='favorite-items'>
                <CardItem img={'/img/dress.png'} name={'Платье прозрачное в цветочек черное'} price={1299} />
                <CardItem img={'/img/orange-tshirt.png'} name={'Платье прозрачное в цветочек черное'} price={1299} />
                <CardItem img={'/img/reddress.png'} name={'Платье прозрачное в цветочек черное'} price={1299} />
                </div>
                <Benefits/>
                <Instagram/>
    
                </div>
            }
            
           
        
           
            
        </div>
    );
};

export default Favorite;