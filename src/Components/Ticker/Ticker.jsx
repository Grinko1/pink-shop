import './Ticker.scss';

const Ticker = ({text=' топовые товары '}) => {
  
    const addSpaceToText = text + ' \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0'
 
    return (
        <div className='ticker '>
            
            <div className="ticker-border">
            <span className='ticker-text'>  {  addSpaceToText.repeat(20)}  </span>
            </div>
       
        </div>
    );
};

export default Ticker;