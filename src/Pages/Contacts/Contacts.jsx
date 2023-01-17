import Benefits from '../../Components/Benefits/Benefits';
import BtnWatchAll from '../../Components/BtnWatchAll/BtnWatchAll';
import Instagram from '../../Components/InstagramBlock/Instagram';
import './Contacts.scss';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="contacts__container">
                <div className="contacts-main">
                    <div className="contacts-main__left">
                        <img className='contact-header-img' src="/icons/contacts.png" alt=""/>
                        <ul className='contacts-list'>
                            <li className='contacts-list__item'>
                                <img src="/icons/mapbl.png" alt=""/>
                                <p>г.Киев,  ул. Нижний вал, 37
                                   <br/> Ежедневно с 11:00 до 21:00
                                    </p>
                            </li>
                            <li className='contacts-list__item'>
                                <img src="/icons/phonebl.png" alt=""/>
                                <p>+7123456789</p>
                            </li>
                            <li className='contacts-list__item'>
                                <img src="/icons/mailbl.png" alt=""/>
                                <p>hello@www.booriva.com</p>
                            </li>
                        </ul>
                    <div className="contact-map">
                        <img className="contact-map__img" src="/img/map.png" alt=""/>
                    </div>
                    <div className="contact-get-direction">
                    <BtnWatchAll img={'/icons/watch-all.png'} text={'проложить маршрут'} size={'l'} />
                    </div>

                    </div>
                    <div className="contacts-main__right">
                        <img src="/img/shop.png" alt=""/>
                    </div>
                </div>
                <Benefits/>
                <Instagram/>
            </div>
           
        </div>
    );
};

export default Contacts;