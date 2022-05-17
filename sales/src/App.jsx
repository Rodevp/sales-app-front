import { Route, Routes } from 'react-router-dom'

//components
import Login from './components/login'
import Register from './components/register'
import AddSeller from './components/seller/add-seller'

import {loginState} from './atoms/login'
import {role} from './atoms/role'
import { useAtom } from 'jotai'

function App() {

  const [isLogin,] = useAtom(loginState)
  const [roleUser,] = useAtom(role)

  console.log(roleUser, isLogin)
  
  const validateUserAdmin = isLogin && roleUser === 'admin'
  const validateUserSeller = isLogin && roleUser === 'seller'

  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Login />}  /> 
        <Route path='/register'  element={<Register />}  /> 
        {
          <Route path='/admin'  element={ 
            validateUserAdmin ? <AddSeller /> : <h1>No tienes permisos de administrador</h1>
          }/>
        }
        {
          <Route  path='/seller' element={
            validateUserSeller ? <h1>seller</h1> : <h1>No tienes permisos</h1>
          }/>
        }
      </Routes>
    </div>
  )
}

export default App
