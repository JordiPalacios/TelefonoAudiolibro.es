import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Web from './web.jsx'
// Fonts
// Supports weights 400-900
import '@fontsource-variable/playfair-display';
// Supports weights 400
import '@fontsource/lobster';
// Supports weights 300-700
import '@fontsource-variable/cormorant';
// Supports weights 400-700 and italic
import '@fontsource/tinos/400.css';
import '@fontsource/tinos/700.css';
import '@fontsource/tinos/400-italic.css';
import '@fontsource/tinos/700-italic.css';
// Supports weights 400 and italic
import '@fontsource/tiro-tamil';
import '@fontsource/tiro-tamil/400-italic.css';

// Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Web />
    </BrowserRouter>
  </StrictMode>,
)
