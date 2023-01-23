import './ProductDetail.scss';
import { useEffect, useState } from 'react';
import ProductBenefits from '../../Components/ProductBenefits/ProductBenefits';
import PinkHeader from '../../Components/PinkHeader/PinkHeader';
import CardItem from '../../Components/CardItem/CardItem';
import Instagram from '../../Components/InstagramBlock/Instagram';
import SizeTable from '../../Components/SizeTable/SizeTable';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, cartTotal } from '../../store/cartSlice';
import { useNavigate, useParams } from 'react-router';
import { products } from '../../data/products';

const ProductDetail = () => {
    const newProducts = useSelector(state => state.products.new)
    const [product, setProduct] = useState({})
    const [showDots, setShowDots] = useState(true)
    const [showText, setText] = useState(false)
    const [openTable, setOpenTable] = useState(false)
    const navigate = useNavigate()


    const {id} = useParams()

    const choozeSize = (i) => {
        setProduct({...product, size : i.size})   
    }

    const sizes = [
        {size:'XS - S'} ,
         {size:'S - M'} ,
         {size:'M - L'} ,
         {size:'L - XL'} ]


        useEffect(() =>{
            setProduct(products.find(i => i.id == id))      
        } ,[id])
   
    const dispatch = useDispatch()

    const addProductToCart = () => {
        dispatch(addToCart({...product, id:new Date().toISOString()}))
        dispatch(cartTotal())
    }
    const fastOrder = () => {
        dispatch(addToCart({...product, id:new Date().toISOString()}))
        dispatch(cartTotal())
        navigate('/order')
      
    }

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
            {
                openTable ? 
                <SizeTable openTable={openTable} setOpenTable={setOpenTable} />
                :
                <div className="product-detail-container">

                <div className="product-block">

                <div className="product-slider">
                    <img  className="product-slider_bigimg" src={product.img} alt=""/>

                </div>
                <div className="product-desc">
                    <h1 className='product-name'>{product.name}</h1>
                    <p className='product-price'>{product.price} &#8381;</p>  
                    <div className="product-sizes">
                        <p>Выбрать размер:</p>
                        <div className="product-size-block">
                            {
                                sizes.map((i) => (
                                    <div className={product.size == i.size ? "product-size_item pink-color" : "product-size_item" }key={i.size}  onClick={()=>choozeSize(i)} >
                                            {i.size}
                                     </div>
                                ))
                            }
                
                        </div>
                    </div>
                    <div className="product-btns">
                      
                        <div className="product-btn-transparent" onClick={addProductToCart}>
                          <img className="product-btn-bg" src='/icons/watch-all.png' alt=""/>
                             <span className="product-btn-name white">в корзину</span> 
                         </div>
                        <div className="product-btn-transparent"  onClick={fastOrder}>
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
                            <button className='product-table-size__btn ' onClick={() => setOpenTable(true)}>таблица размеров</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className='hide-benefits'>
                  <ProductBenefits/>
            </div>
          
            <PinkHeader pinkText={'Могут понравится'} doubleText={'Тебе могут понравится'}/>
            <div className="product-suggestion">
            {newProducts.map((item) => (
                <CardItem key={item.id} img={item.img} name={item.name} price={item.price} isFavorite={item.isFavorite} id={item.id} />
            ))}
            </div>
           <Instagram/>
            </div>
            
            
            }
           
            
        </div>
    );
};

export default ProductDetail;