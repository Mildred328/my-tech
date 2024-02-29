// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './component/Nav'
import DetailedPage from './pages/Detailedpage'
import MyHook from './Hooks/MyHook'
import NotFoundPage from './pages/404Page'
import FetchData from './Hooks/FetchData'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
      {/* <Home />
      <About />
      <Products/> */}

      {/* Routing pages */}
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/product/:id" element={<DetailedPage/>}/>
        <Route path="/Hook" element={<MyHook/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path="/blogs" element={<FetchData/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
  
}

export default App
