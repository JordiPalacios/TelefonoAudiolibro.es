import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.js'
import { BrowserRouter } from 'react-router'
import Web from './web.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Web />
    </BrowserRouter>
  </StrictMode>,
)
