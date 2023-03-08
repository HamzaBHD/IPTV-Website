import { Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contacts from './pages/Contacts'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' exact={true} element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
