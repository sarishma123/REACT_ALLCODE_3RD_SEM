
import { BrowserRouter, Routes, Route } from 'react-router'
import Wrapper from './wrapper'
import Userhome from './userhome'
import Profile from './profile'
import Userdetails from './userdetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper/>}>
          <Route index element={<Userhome/>}/>
        </Route>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/userdetails/:userid" element={<Userdetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App