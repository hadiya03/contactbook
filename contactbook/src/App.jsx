import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './assets/components/Add'
import View from './assets/components/View'
import NavBar from './assets/components/NavBar'
import Login from './assets/components/Login'
import Signup from './assets/components/Signup'
import Aboutus from './assets/components/Aboutus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <NavBar/>
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Add' element={<Add/>}/>
          <Route path='/View' element={<View/>}/>
          <Route path='/Ab' element={<Aboutus/>}/>
       </Routes>
    </>
  )
}

export default App
