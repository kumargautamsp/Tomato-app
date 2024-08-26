import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import placeOrder from './pages/placeOrder/placeOrder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
<div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<placeOrder/>} />
    </Routes>
    </div>
   <Footer/>
    </>
    
  )
}

export default App