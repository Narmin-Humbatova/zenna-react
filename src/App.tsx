import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// AOS Library
import { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import Notification from './components/Notification'
import Header from './components/Header'
import Footer from './components/Footer'
// React Router DOM (react maeshrut sistemi)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Routes kompanentleri
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import OneHome from './pages/OneHome'
import Pages from './pages/Pages'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Elements from './pages/Elements'
import Updates from './components/Updates'
import Product from './pages/Product'
import Search from './pages/Search'
import Basket from './pages/Basket'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])

  return (
    <>
      <BrowserRouter>
      <Notification />
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<OneHome/>}/>
          <Route path='/pages' element={<Pages/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/elements' element={<Elements/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Updates />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
