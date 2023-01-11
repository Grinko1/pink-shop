
import BreadCrumps from '../BreadCrumps/BreadCrumps';
import PinkHeader from '../PinkHeader/PinkHeader';
import './CategoryHeader.scss';

const CategoryHeader = () => {
    return (
        <div className='categoryheader-container'>
            <div className="categoryheader-left">
            <BreadCrumps/>
            <PinkHeader pinkText={'ВЕРХ'} doubleText={'ВЕРХ'}/>
            </div>
            <div className="categoryheader-right">
                <img className="categoryheader-right_img" src="/img/category-baner.png" alt=""/>
            </div>
         
        </div>
    );
};

export default CategoryHeader;