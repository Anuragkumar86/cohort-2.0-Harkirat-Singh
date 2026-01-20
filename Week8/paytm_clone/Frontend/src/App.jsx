import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Signup } from './pages/SignUp'
import { Signin } from './pages/SignIn'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/SendMoney'
import { SuccessPage } from './pages/SuccesPage'
import { FailurePage } from './pages/FailPage'

function App() {
  
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element = {<Signup />}></Route>
        <Route path='/signin' element = {<Signin />}></Route>
        <Route path='/dashboard' element = {<Dashboard />}></Route>
        <Route path='/send' element = {<SendMoney />}></Route>
        <Route path='/success' element = {<SuccessPage/>}></Route>
        <Route path='/failurepage' element = {<FailurePage/>}></Route>
        <Route path='/' element = {<NavigateElement/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

function NavigateElement(){
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the Sign Up page when the app starts
    navigate('/signup');
  }, [navigate]);
}

export default App
