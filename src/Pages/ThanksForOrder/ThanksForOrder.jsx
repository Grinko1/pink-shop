import { Link } from 'react-router-dom';
import BtnWatchAll from '../../Components/BtnWatchAll/BtnWatchAll';
import './ThanksForOrder.scss';

const ThanksForOrder = () => {
    return (
        <div className='thanks'>
            <div className="thanks__container">
                <Link to='/'>
                                    <img className='thanks-close' src="/icons/delete.png" alt=""/>
                </Link>

                <img src="/icons/thanks.png" alt=""/>
                <p className="thanks-order"> Номер заказа 555</p>
                <p className="thanks-msg">Мы обожаем встречать booriva на улице.  Так как всех не встретишь, отмечай нас в соц.сетях  и мы внутри взорвемся и закричим УРА! <br/> 
                    Ставь тэг <span> #boorivagirls</span> чтобы быть в нашей тусовке.</p>
                    <Link to='/'>
                    <BtnWatchAll img={'/icons/watch-all.png'} text={'На главную'} size={'l'} />
                    </Link>

            </div>
            
        </div>
    );
};

export default ThanksForOrder;