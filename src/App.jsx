import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cars from './Components/Cars'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/cars' element={<Cars/>}></Route>
      <Route index element={<Dashboard/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
