// import logo from './logo.svg';
import './App.css';
import React, { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './comp/Home';
import Nav from './comp/Nav';
import Service from './comp/Service';
// import App from '../public/vendor/jquery/jquery';
import About from './comp/About';
import Pricing from './Pricing';
import Newsletter from './comp/Newsletter'
import Notfound from './comp/Notfound';




function App() {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Service' element={<Service/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}></Route>
    <Route path='/Newsletter' element={<Newsletter/>}></Route>
    <Route path='*' element={<Notfound/>}></Route>


   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
