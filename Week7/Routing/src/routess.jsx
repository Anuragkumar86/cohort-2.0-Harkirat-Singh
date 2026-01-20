import { useState } from 'react'
import React from 'react'
import {lazy, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
const Dashboard = lazy(()=> import('./components/Dashboard'));
const Landing = lazy(()=> import('./components/Landing'));
// import { Landing } from './components/Landing'

function Routess() {

  return (
    <div>
      <div style={{ background: "red" }}>
        Hi I AM FIXED NAVBAR
      </div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path='dashboard' element={<Suspense fallback = {"loading.."}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback = {"loading.."}><Landing /></Suspense>} />
          {/* <Route path='/' element={<Landing />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <button onClick={function () {
      navigate("/");
    }}>Landing</button>
    <button onClick={() => {
      navigate("dashboard");
    }}>Dashboard</button>
  </div>
}

export default Routess
