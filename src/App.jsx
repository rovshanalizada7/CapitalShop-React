import './App.css'
import BasketPage from './assets/BasketPage/BasketPage'
import HomePage from './assets/HomePage.jsx/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wishlist from './assets/Wishlist/Wishlist'
import SignIn from './assets/SignIN/SignIn'
import SignUp from './assets/SignUp/SignUp'
import Welcome from './assets/SignIN/Welcome/Welcome'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/basketPage' element={<BasketPage/>}/>
        <Route path='/wishList' element={<Wishlist/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path="/welcome/:id" element={<Welcome/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
