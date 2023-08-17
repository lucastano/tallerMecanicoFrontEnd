import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cars from './Components/Cars'
import NewCar from './Components/NewCar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Usuarios from './Components/Usuarios'
import NuevoUsuario from './Components/NuevoUsuario'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Dashboard/>}>
      <Route path='/nuevo' element={<NewCar/>}></Route>
      <Route path='/cars' element={<Cars/>}></Route>
      <Route path='/usuarios' element={<Usuarios/>}></Route>
      <Route path='/nuevoUsuario' element={<NuevoUsuario/>}></Route>

      nuevoUsuario

      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
