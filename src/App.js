import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"


import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Blog from './components/Blog'
import About from './components/About'
import Contect from './components/Contect'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
       <BrowserRouter>
            <Header />
           g
            
        <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/shop" element={<Shop/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contect/>} />
        </Routes>
             <Footer />
        </BrowserRouter>
      
    </div>
  )
}

export default App
