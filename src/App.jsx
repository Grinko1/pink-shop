import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Layout from './Components/Layout/Layout';
import BoorivaGirls from './Pages/BoorivaGirls/BoorivaGirls';
import Category from './Pages/Category/Category';
import Exchange from './Pages/Exchange/Exchange';
import Favorite from './Pages/Favorite/Favorite';
import Main from './Pages/Main/Main';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Delivery from './Pages/Delivery/Delivery'
import Discounts from './Pages/Discounts/Discounts';
import Contacts from './Pages/Contacts/Contacts';
import ProductsAll from './Pages/ProductsAll/ProductsAll';
import NotFound from './Pages/NotFound/NotFound';
import SearchPage from './Pages/SearchPage/SearchPage';
import Order from './Pages/Order/Order';
import ThanksForOrder from './Pages/ThanksForOrder/ThanksForOrder';
import NewPage from './Pages/New/NewPage';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartTotal } from './store/cartSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cartTotal())
  },[])
  
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  
  return (
    <div>
<Wrapper>
<Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='products' element={<ProductsAll/>}/>
          <Route path='products/:category' element={<Category/>}/>
          <Route path='product/:id' element={<ProductDetail/>}/>
          <Route path='favorite' element={<Favorite/>}/>
          <Route path='boorivagirls' element={<BoorivaGirls/>}/>
          <Route path='exchange' element={<Exchange/>}/>
          <Route path='new' element={<NewPage/>}/>
          <Route path='delivery' element={<Delivery/>}/>
          <Route path='discounts' element={<Discounts/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='search' element={<SearchPage/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='thanks-for-order' element={<ThanksForOrder/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
</Wrapper>
      
  
    </div>
  );
}

export default App;
