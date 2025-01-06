import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser'
import App from './App'
import './index.css'

// Initialize EmailJS with your public key
emailjs.init("Ijk9GvhmV0Y_yz1qX") // Replace with your actual public key

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
