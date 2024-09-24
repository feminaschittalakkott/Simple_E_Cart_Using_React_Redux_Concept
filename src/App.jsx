import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import View from './pages/View'
import Wish from './pages/Wish'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
