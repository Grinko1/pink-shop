import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setSearch } from '../../store/productsSlice';


import './InputSearch.scss';

const InputSearch = ({setIsOpenSearch}) => {
  const [searchStr, setSearchStr] = useState('')
 


const navigate = useNavigate()
const dispatch = useDispatch()

  useEffect(() => {
    if(searchStr.length > 1){
      navigate('/search')
    }
  }, [searchStr])

  
  const handelSearch = (e) => {
    setSearchStr(e.target.value)
    dispatch(setSearch(searchStr))

  }
  const handleCloseSearch = () => {
    setSearchStr('')
    setIsOpenSearch(false)
    navigate('/')
  }
  
    return (
        <div className="header-search-block" onClick={() => setIsOpenSearch(false)}>
        <div className="header-search-main" onClick={e=> e.stopPropagation()} >
          <img src="/icons/search-grey.png" alt=""/>
          <input className="header-search-input" placeholder='Поиск товаров'  type="text" value={searchStr} onChange={(e )=> handelSearch(e) }/>
          <img className='header-search-delete' src="/icons/delete.png" alt="" onClick={handleCloseSearch}/>
        </div>
      </div>
    );
};

export default InputSearch;