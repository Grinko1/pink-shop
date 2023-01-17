
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { menuArr } from '../../data/menu';
import PinkHeader from '../PinkHeader/PinkHeader';
import './CategoryHeader.scss';

const CategoryHeader = () => {

    const {pathname} = useLocation()
    const [header, setHeader] = useState({})
    useEffect(() => {
        let temp = menuArr.filter((item) => item.link.includes(pathname.substring(1)));
        setHeader(...temp)
    },[pathname])


    return (
        <div className='categoryheader-container'>
            <div className="categoryheader-left">
       
            <PinkHeader pinkText={header.name} doubleText={header.name}/>
            </div>
            <div className="categoryheader-right">
                <img className="categoryheader-right_img" src="/img/category-baner.png" alt=""/>
            </div>
         
        </div>
    );
};

export default CategoryHeader;