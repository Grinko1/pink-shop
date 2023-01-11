import { Link } from 'react-router-dom';
import BtnWatchAll from '../../Components/BtnWatchAll/BtnWatchAll';
import Ticker from '../../Components/Ticker/Ticker';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='notfound__imgblock'>
            <img className='notfound-icon' src="/icons/notfound.png" alt=""/>
            </div>
            <div className="notfound-ticker">
            <Ticker text={" Похоже, что-то пошло не так..."}/>
            </div>
           
            <p className='notfound-text'>
            Страница не найдена, но у нас есть <br/>
       еще много всего интересного
            </p>
            <Link to='/'>
            <BtnWatchAll img={'/icons/watch-all.png'} text={'На главную'}/>
            </Link>

        </div>
    );
};

export default NotFound;