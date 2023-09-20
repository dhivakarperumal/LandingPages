import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Hom';
import Login from './Components/Login';
import Love from './Componets/About';
import Products from './Componets/Products';

import Forms from './Contacts/Count';

import Footer from './Footer/Footers';



function App() {
  return (
   <>
      <Navbar/>
      
      <Routes>
        <Route  exact path='/' element={<Home/>}>Home</Route>
        {/* <Route  exact path='/about' element={<About/>}>About</Route>
        <Route  exact path='/services' element={<Services/>}>Services</Route>
        <Route  exact path='/contact' element={<Contact/>}>Contact</Route> */}
        <Route exact path='/login' element={<Login/>}>Login</Route>
      </Routes>
      <Love/>
      <Products/>
      <Forms/>
      <Footer/>
     
   </>
  );
}

export default App;
