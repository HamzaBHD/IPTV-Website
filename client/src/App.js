import './App.css'
import Home from './pages/Home'

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';


function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  );
}
 
export default App;