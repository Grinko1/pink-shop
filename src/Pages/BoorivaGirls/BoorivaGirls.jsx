import BreadCrumps from '../../Components/BreadCrumps/BreadCrumps';
import BtnWatchAll from '../../Components/BtnWatchAll/BtnWatchAll';
import './BoorivaGirls.scss';

const BoorivaGirls = () => {
    return (
        <div className='booriva'>
            <div className="booriva__container">
                <BreadCrumps/>
                <div className="booriva-header">
                    <img className="booriva-header__img" src="/icons/booriva-header.png" alt=""/>
                    <p className="booriva-header__text">
                    Мы обожаем встречать booriva на улице. 
                    Так как всех не встретишь, отмечай нас в соц.сетях 
                    и мы внутри взорвемся и закричим УРА!
                    </p>
                </div>
                <div className="booriva-galery">
                    <div className="booriva-galery__column">
                        <img src="/instimg/1.png" alt=""/>
                        <img src="/instimg/2.png" alt=""/>
                        <p className="booriva-galery-p">Ставь тэг <span className='booriva-galery-tag'>#boorivagirls</span>  чтобы быть
                            в нашей тусовке.</p>
                            <BtnWatchAll img='/icons/watch-all.png' text='Instagram'/>
                    </div>
                    <div className="booriva-galery__column">
                    <img src="/instimg/3.png" alt=""/>
                        <img src="/instimg/4.png" alt=""/>
                        <img src="/instimg/5.png" alt=""/>
                       
                        </div>

                        <div className="booriva-galery__column higher-block">
                        <img src="/instimg/6.png" alt=""/>
                        <img src="/instimg/7.png" alt=""/>
                        <img src="/instimg/8.png" alt=""/>
                        </div>

                </div>
            </div>
            
        </div>
    );
};

export default BoorivaGirls;