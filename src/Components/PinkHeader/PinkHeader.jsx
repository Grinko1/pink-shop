import './PinkHeader.scss';

const PinkHeader = ({pinkText, doubleText}) => {
    return (
        <div>
              <div className='new-header__block'>
            <h1 className='new-header-pink'>{pinkText}</h1>
            <p className='new-header-doble'>{doubleText}</p>
            <img className='new-header-img' src="/img/wave.png" alt=""/>
            
        </div>
        </div>
    );
};

export default PinkHeader;