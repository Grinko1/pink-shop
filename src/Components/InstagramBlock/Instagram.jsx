import './Instagram.scss';

const Instagram = () => {
    return (
        <div className='instagram'>
            <div className="instagram-block">
                <div className="instagram-block-item">
                <div className='instagram-block-item_top '>
                <img className="instagram-block-item_icon" src="/icons/instagram.png" alt=""/>
                    <span>Мы в экстазе, когда ты нас отмечаешь)
                            Отмечай плз чаще</span>
                </div>
                <div className='instagram-block-item_btm '>
                     
<img className='instagram-inst1' src="/img/inst1.png" alt=""/>
<img className='instagram-inst2' src="/img/inst2.png" alt=""/>
                </div>

                </div>
                <div className="instagram-block-item">
                <img className='instagram-inst3' src="/img/inst3.png" alt=""/>
                    </div>
                    <div className="instagram-block-item">
                    <div className='instagram-block-item_right '>
                     
                     <img className='instagram-inst4' src="/img/inst4.png" alt=""/>
                     <img className='instagram-inst5' src="/img/inst5.png" alt=""/>
                                     </div>
                    <div className='instagram-block-item_top '>
                <img className="instagram-block-item_icon" src="/img/hashtag.png" alt=""/>
                    <span className='instagram-block-item_textend'>Ставь тэг чтобы быть в нашей тусовке.</span>
                </div>
  
                    </div>
            </div>
            
        </div>
    );
};

export default Instagram;