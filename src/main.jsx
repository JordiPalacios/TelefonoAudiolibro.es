import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.js'
import Web from './web_temp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web />
  </StrictMode>,
)
