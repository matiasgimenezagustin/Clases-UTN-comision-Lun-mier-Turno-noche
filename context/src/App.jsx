import React from 'react'


import { CartPage, ContactPage, DetailPage, HomePage } from './screens'
import { NavLink, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div>
      <nav>
        <NavLink to='/cart'>Ir al carrito</NavLink>
        <NavLink to='/'>Ir al Home</NavLink>
        <NavLink to='/contact/'>Ir a contacto</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
