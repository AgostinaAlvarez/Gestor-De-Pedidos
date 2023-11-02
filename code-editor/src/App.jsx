import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import  Editor  from '@monaco-editor/react'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path='/' element={<>
        <div>Home screen</div>
        <NavLink to='/tester'>Ir a la consola</NavLink>
        </>}/>
        <Route path='/tester' element={
          <>
            <button onClick={()=>{navigate('/')}}>Home</button>
            <Editor
              height="90vh"
              width="100%"
              defaultLanguage='javascript'
              theme='vs-dark'
            />
          </>
        }/>
      </Routes>
    </>
  )
}

export default App
