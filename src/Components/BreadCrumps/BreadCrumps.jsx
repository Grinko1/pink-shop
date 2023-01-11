import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './BreadCrumps.scss';

const BreadCrumps = () => {
    const location = useLocation();

    return (
          <nav className='breadcrumps'>
            <div className='breadcrump-item'>
                <Link to="/" 
                 className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}>Home </Link>
                 <img className='breadcrump-arrow' src="/icons/breadcrump.png" alt=""/>
            </div>
            <div className='breadcrump-item'>
            <Link to="/products"
             className={location.pathname.startsWith("/product") ? "breadcrumb-active" : "breadcrumb-not-active"}>Products </Link>    
             <img className='breadcrump-arrow' src="/icons/breadcrump.png" alt=""/>     
            </div>
            <div className='breadcrump-item'>
    <Link to="/products/top"
    className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}>Product 1</Link>
</div>
             
  
     
            </nav>
    );
};

export default BreadCrumps;