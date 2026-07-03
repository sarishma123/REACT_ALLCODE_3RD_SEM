import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Uncontrollledform from './assets/day8/uncontrolledform'
import Controlledform from './assets/day8/controlledform'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* <Uncontrollledform/> */}
 <Controlledform/>

  </StrictMode>,
)
