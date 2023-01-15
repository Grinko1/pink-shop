import { Link } from 'react-router-dom';
import './PhotoMenu.scss';

const PhotoMenu = () => {
    return (
        <div className="photomenu">
            <div className="photomenu-left">
                <div className='photomenu-photo-big'>
                <img className=' photo-big' src="/img/tshirts.png" alt=""/>
                <div className="pink-name ">
                    <Link to='/products/top'>
                    <img className="pink-name_bg tshirts" src="/icons/tshirt.png" alt=""/>
                   <span className='tshirts'>футболки</span> 
                    </Link>
                 
                    </div>
                </div>
                <div className='photomenu-photo-small'>
                <img className='photo-small' src="/img/pants.png" alt=""/>
                <div className="pink-name pants">
                    <Link to='/products/bottom'>
                    <img className="pink-name_bg pants" src="/icons/bottom.png" alt=""/>
                    <span className='pants rotate-pants_name'>низ</span> 
                    </Link>
  
                    </div>
                </div>
                <div className='photomenu-photo-small_1'>
                <img className='photo-small' src="/img/jackets.png" alt=""/>
                <div className="pink-name ">
                    <Link to='/products/top'>
                    <img className="pink-name_bg jackets" src="/icons/top.png" alt=""/>
                    <span className='jackets'>верх</span>
                    </Link>
                 </div>
                </div>
               
            </div>
            <div className="photomenu-right">
            <div className='photomenu-photo-big'>
                <img className=' photo-big' src="/img/hoodie.png" alt=""/>
                <div className="pink-name ">
                    <Link to='/products/jackets'>
                    <img className="pink-name_bg hoodie" src="/icons/hoodie.png" alt=""/>
                    <span className='hoodie rotate-hoodie_name'>худи</span>
                    </Link>
                 
                    </div>
                </div>
                <div className='photomenu-photo-small'>
                <img className='photo-small' src="/img/dresses.png" alt=""/>
                <div className="pink-name ">
                    <Link to='/products/dresses'>
                    <img className="pink-name_bg dresses" src="/icons/dress.png" alt=""/>
                    <span className='dresses rotate-dress_name'>платья</span> 
                    </Link>
 
                    </div>
                
                </div>
                <div className='photomenu-photo-small_1'>
                <img className='photo-small' src="/img/suits.png" alt=""/>
                <div className="pink-name ">
                    <Link to='/products/suits'>
                    <img className="pink-name_bg suits" src="/icons/dress.png" alt=""/>
                    <span className='suits rotate-suits_name'>костюмы</span> 
                    </Link>
            
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PhotoMenu;