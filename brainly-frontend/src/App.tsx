
import { Dashboard } from './Pages/Dashboard'
import { Signup } from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import { ShareDashboard } from './Pages/ShareDashboard'



function App() {

  return<BrowserRouter>
   <Routes>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/api/v1/brain/:shareLink' element={<ShareDashboard/>}/>
   </Routes>
  </BrowserRouter>
}

export default App
