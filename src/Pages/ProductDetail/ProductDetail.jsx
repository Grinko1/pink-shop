import BreadCrumps from '../../Components/BreadCrumps/BreadCrumps';
import './ProductDetail.scss';
import { useEffect, useState } from 'react';
import ProductBenefits from '../../Components/ProductBenefits/ProductBenefits';
import PinkHeader from '../../Components/PinkHeader/PinkHeader';
import { newProducts } from '../../data/new';
import CardItem from '../../Components/CardItem/CardItem';
import Instagram from '../../Components/InstagramBlock/Instagram';

const ProductDetail = () => {
    const [showDots, setShowDots] = useState(true)
    const [showText, setText] = useState(false)

    useEffect(() => {
        if(showText){
            setShowDots(false)
        }else{
            setShowDots(true)
        }
    },[showText])
    

    const toggleShowMore = () => {
        setText(!showText)
        
       
    }
    return (
        <div className='product-detail'>
            <div className="product-detail-container">
                <BreadCrumps/>
                <div className="product-block">

                <div className="product-slider">
                    <img  className="product-slider_bigimg" src="/img/bomber.png" alt=""/>

                </div>
                <div className="product-desc">
                    <h1 className='product-name'>Бомбер Gone Crazy хаки</h1>
                    <p className='product-price'>1099 &#8381;</p>  
                    <div className="product-sizes">
                        <p>Выбрать размер:</p>
                        <div className="product-size-block">
                            <div className="product-size_item">
                            XS — S
                            </div>
                            <div className="product-size_item">
                            S — M
                            </div>
                            <div className="product-size_item">
                            M — L
                            </div>
                            <div className="product-size_item">
                            L — XL
                            </div>
                        </div>
                    </div>
                    <div className="product-btns">
                      
                        <div className="product-btn-transparent">
                          <img className="product-btn-bg" src='/icons/watch-all.png' alt=""/>
                             <span className="product-btn-name white">в корзину</span> 
                         </div>
                        <div className="product-btn-transparent">
                          <img className="product-btn-bg" src='/icons/btn-transparent.png' alt=""/>
                             <span className="product-btn-name pink">Быстрый заказ</span> 
                         </div>
    
                    </div>
                    <div className="product-text">
                    Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура выполнена в серебряном цвете. Акцентными деталями выступают объемные нашитые карманы и капюшон, который отстёгивается. Один
                    <span 
                     className={`product-text-dots
                     ${showDots ? 'view' : 'hidden'} `        
                    }>. . .</span> 
                        <span className= {`product-text-more
                     ${showText ? 'view' : 'hidden'} `        
                    }> erisque enim ligula venenatis dolor.
                     Maecenas nisl est, ultrices nec congue eget,
                      auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. 
                      Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
                       In at libero sed nunc venenatis imperdiet sed ornare turpis.
                        Donec vitae dui eget tellus gravida venenatis.
                         Integer fringilla congue eros non fermentum.
                          Sed dapibus pulvinar nibh tempor porta.</span>
                          {

                          }
                    <button className='btn-show-more' onClick={toggleShowMore}>{ showText ? 'Скрыть' : 'Читать больше'}</button>
                    </div>
                    <div className="product-model">
                        <div className="product-composition">
                            <div className="product-left">
                                <h3>Параметры модели:</h3>
                                <span className="product-left_p">(На модели XS — S-ка)</span>
                                <div className="product-model-size">
                                <p className="product-model-size__height"> Рост  171 см</p>
                              
                                    <img className="product-model-size__icon" src="/icons/model.png" alt=""/>
                                    <div className="product-model-size__values">
                                    <div className="product-model-size__value">
                                        <span>83 см</span> <br/>
                                        объем груди
                                    </div>
                                    <div className="product-model-size__value">
                                        <span>66 см</span> <br/>
                                         объем талии
                                    </div>
                                    <div className="product-model-size__value">
                                        <span>93 см</span> <br/>
                                        объем бедер
                                    </div>
                                    </div>
                                    
                                    
                                    
                                 
                                </div>
                            </div>
                            <div className="product-right">
                            <h3>Состав:</h3>
                            <p>50% вискоза,</p> 
                          <p>50% полиэстер</p>
                            </div>
                        </div>
                        <div className="product-table-size">
                            <button className='product-table-size__btn'>таблица размеров</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <ProductBenefits/>
            <PinkHeader pinkText={'Могут понравится'} doubleText={'Тебе могут понравится'}/>
            <div className="product-suggestion">
            {newProducts.map((item) => (
                <CardItem key={item.id} img={item.img} name={item.name} price={item.price} />
            ))}
            </div>
           <Instagram/>
            </div>
            
            
            
        </div>
    );
};

export default ProductDetail;