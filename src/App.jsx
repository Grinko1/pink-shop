import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
  
    </div>
  );
}

export default App;
