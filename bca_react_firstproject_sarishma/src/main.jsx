import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Home, { Childtwo } from './home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <Childtwo/>
  </StrictMode>,
)
