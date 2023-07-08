import React from 'react'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Navbar from './component/Navbar'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Service from './component/Service'
import Price from './component/Price'
import Notfound from './component/Notfound'
const App = () =>{
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/contact' element ={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/price" element={<Price/>}></Route>  
        <Route path="*" element={<Notfound/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
