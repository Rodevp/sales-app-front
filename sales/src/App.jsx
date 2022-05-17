import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './components/login'
import Register from './components/register'

import {loginState} from './atoms/login'
import {role} from './atoms/role'
import { useAtom } from 'jotai'

function App() {

  const [isLogin,] = useAtom(loginState)
  const [roleUser,] = useAtom(role)

  console.log(roleUser, isLogin)
  
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Login />}  /> 
        <Route path='/register'  element={<Register />}  /> 
        {
          (roleUser && isLogin) && roleUser === 'admin'
            ?  <Route path='/admin'  element={<h1>admin</h1>}/>
            : <Route  path='/seller' element={<h1>seller</h1>}/>
        }

      </Routes>
    </div>
  )
}

export default App
