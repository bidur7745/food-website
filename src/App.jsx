import {React, useState} from 'react'
import Navbar from './components/NavBar/Navbar'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Cart from './pages/cart/Cart'

import PlaceOrder from './pages/placeorder/PlaceOrder'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    <BrowserRouter>
    
    {showLogin?<Login setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

         <Route path='/order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
