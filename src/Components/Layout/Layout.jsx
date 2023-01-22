import { Outlet } from "react-router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MobileMenu from "../MobileMenu/MobileMenu"
import './Layout.scss'


const Layout = () => {
 
    return (
        <>
        <Header />
        <div className='main-container'>
                <Outlet/>
      
        </div>
        <div className="layout-mobile-menu">
           <MobileMenu/>
       </div>
        <Footer/>
            
        </>
    );
};

export default Layout;