import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Profile from './profile.jsx'
import Firstprops from './firstprops.jsx'
import Secondprops from './secondprops.jsx'
let myObj ={
  name:"sachin",
  age:19,
  address:"khare"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <Profile/> 
    {/* spread operator in props */}
    <Firstprops {...myObj}/>
  <Secondprops/>
  </StrictMode>,
)
