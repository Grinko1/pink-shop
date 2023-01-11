import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import './ModalEmptyFavorite.scss';

const ModalEmptyFavorite = () => {
    const [active, setActive] = useState(true)

 
    return (
        <div className={active ? "favorite-modal active" : "favorite-modal"} onClick={() => setActive(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className='modal-close'>
                <Link to='/'>
                  <img className='modal-close_icon' src="/icons/close-icon.png" alt="" onClick={() => setActive(false)}/>
                </Link>

            </div>
            <div className="modal-header">
                <img className='modal-canlike-img' src="/icons/can-like.png" alt=""/>
            </div>
            <div className="modal-main">
            <img className="modal-main__icon" src="/icons/favorite-heart.png" alt=""/>
            <div className="modal-main__text">
            Похоже тебе еще ничего не запало
               <br/> в сердечко....
     
            </div>
            <Link to='/'>
            <BtnWatchAll img={'/icons/watch-all.png'} text={'на главную'} />
            </Link>
          
            </div>
            
     


        </div>

    </div>
    );
};

export default ModalEmptyFavorite;