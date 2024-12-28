import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap'
import './assets/css/main.css'
import './assets/css/style.css'
import './assets/css/animate.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "react-loading-skeleton/dist/skeleton.css"
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
