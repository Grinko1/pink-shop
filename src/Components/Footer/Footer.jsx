import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer' >
            <div className="footer_block footer-adaptive">
                <img className='footer-logo ' src="/img/footer-logo.png" alt=""/>
            </div>
            <div className="footer_block">
                <h3 className='footer-header'>Инфо</h3>
                <ul  className='footer-info'>
                    <li> <Link to='/contacts'>Контакты</Link> </li>
                    <li><Link to='/discounts'>Система лояльности</Link></li>
                    <li><Link to='/exchange'>Обмен и возврат</Link> </li>
                    <li><Link to='/delivery'>Доставка и оплата</Link></li>
                </ul>
            </div>
            <div className="footer_block">
            <h3 className='footer-header'>НАШ АДРЕС</h3>
                <ul className='footer-info'>
                    <li>г.Киев, ул. Нижний Вал, 37</li>
                    <li>Пн — Вс: с 11:00 до 21:00</li>
                </ul>
            </div>

            <div className="footer_block footer-mobile">
            <h3 className='footer-header '>СОЦ.СЕТИ</h3>
                <div className='footer-icons'>
                
                    <img className='footer-icon' src="/icons/fbicon.png" alt=""/>
                    <img className='footer-icon' src="/icons/iicon.png" alt=""/>
          
                
                </div>
                     
                
            </div>
            <div className="footer_block ">
                <div className="footer_block-top write-msg ">
                    <img className="footer_block-top-admin" src="/img/admin.png" alt=""/>
                    <p>Нам важно знать, что ты думаешь про нас! Просто напиши мне!</p>
                </div>
                <h3 className='footer-header_last'>Написать Иванке</h3>
            </div>
            
        </footer>
    );
};

export default Footer;