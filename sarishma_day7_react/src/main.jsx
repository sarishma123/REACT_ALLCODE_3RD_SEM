import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Listinreact from './day7/listinreact'
import List1 from './listinreactinclassassign'
import Lisofstudent from './day7/arrayofstudent'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Listinreact/>
   <List1/>
   <Lisofstudent/>
  </StrictMode>,
)
