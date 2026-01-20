import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routess from './routess.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Routess></Routess> */}
    
  </StrictMode>,
)
