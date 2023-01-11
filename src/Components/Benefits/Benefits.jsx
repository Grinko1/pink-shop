import './Benefits.scss';

const Benefits = () => {
    return (
        <div className='benefits'>
            <div className="benefit-item">
                <div className="benefit-item-left">
                    <img className='benefit-item-img' src="/icons/cat.png" alt=""/>
                </div>
                <div className="benefit-item-right">
                    <h3 className="benefit-item-bolt_text">Отправка день в день</h3>
                    <span className="benefit-item_text">При заказе до 18:00</span>
                </div>

            </div>
            <div className="benefit-item">
                <div className="benefit-item-left">
                    <img className='benefit-item-img' src="/icons/parsel.png" alt=""/>
                </div>
                <div className="benefit-item-right">
                    <h3 className="benefit-item-bolt_text">Легкий возврат/обмен</h3>
                    <span className="benefit-item_text">В течении 14 дней</span>
                </div>

            </div>
            <div className="benefit-item">
                <div className="benefit-item-left">
                    <img className='benefit-item-img' src="/icons/heart.png" alt=""/>
                </div>
                <div className="benefit-item-right">
                    <h3 className="benefit-item-bolt_text">Сделано в Украине</h3>
                    <span className="benefit-item_text">Прям в Киеве</span>
                </div>

            </div>
            
        </div>
    );
};

export default Benefits;