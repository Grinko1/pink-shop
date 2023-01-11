import './ProductBenefits.scss';

const ProductBenefits = () => {
    return (
        <div className='productbenefits'>
            
            <div className="productbenefits__left">
                <div className="productbenefits-item">
                    <div>
                    <img className="productbenefits-img" src="/icons/cat.png" alt=""/>
                    </div>
                    
                    <div className="productbenefits-desc">
                    <h3>Отправляем день в день</h3>
                    <p>При заказе до 18:00</p>
                    </div>
                 
                </div>

                <div className="productbenefits-item">
                    <div>
                    <img className="productbenefits-img" src="/icons/parsel.png" alt=""/>
                    </div>
                    
                    <div className="productbenefits-desc">
                    <h3>Легкий возврат/обмен</h3>
                    <p>В течении 14 дней</p>
                    </div>
                 
                </div>

                <div className="productbenefits-item">
                    <div>
                    <img className="productbenefits-img" src="/icons/superimposed.png" alt=""/>
                    </div>
                    
                    <div className="productbenefits-desc">
                    <h3>Отправляем наложкой</h3>
                    <p>+  2% от суммы </p>
                    </div>
                 
                </div>
            </div>
            <div className="productbenefits__right">
            <div className="productbenefits-right-container">
                <h1>ФОТО ИЗ INSTAGRAM</h1>
                <img className='productbenefits-inst-img' src="/img/imgfrom-inst.png" alt=""/>
            </div>
            </div>

        </div>
    );
};

export default ProductBenefits;