import AboutShop from '../../Components/AboutShop/AboutShop';
import Benefits from '../../Components/Benefits/Benefits';
import Instagram from '../../Components/InstagramBlock/Instagram';
import NewBlock from '../../Components/NewBlock/NewBlock';
import PhotoMenu from '../../Components/PhotoMenu/PhotoMenu';
import PopularGoods from '../../Components/PopularGoods/PopularGoods';
import SuitsBlock from '../../Components/SuitsBlock/SuitsBlock';
import Ticker from '../../Components/Ticker/Ticker';
import  './Main.scss';

const Main = () => {
    return (
        <div>
           <PhotoMenu/>
           <NewBlock/>
           <AboutShop/>
           <Ticker text={'топовые товары '}/>
           <PopularGoods/>
           <SuitsBlock/>
           <Benefits/>
           <Instagram/>
        </div>
    );
};

export default Main;