import { Outlet } from "react-router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import './Layout.scss'


const Layout = () => {
 
    return (
        <>
        <Header />
        <div className='main-container'>
                <Outlet/>
        </div>
       
        <Footer/>
            
        </>
    );
};

export default Layout;