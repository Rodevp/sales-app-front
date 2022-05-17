import { Route, Routes } from 'react-router-dom'

//components
import Login from './components/login'
import Register from './components/register'
import AddSeller from './components/seller/add-seller'
import ListSeller from './components/seller/list-sellers'

import { loginState } from './atoms/login'
import { role } from './atoms/role'
import { useAtom } from 'jotai'
import TopSellers from './components/seller/top-sellers'
import Sales from './components/sales/sales'
import GetSales from './components/sales/get-sales'
import GetProducts from './components/product/list-products'
import Product from './components/product/product'

function App() {

  const [isLogin,] = useAtom(loginState)
  const [roleUser,] = useAtom(role)

  console.log(roleUser, isLogin)

  const validateUserAdmin = isLogin && roleUser === 'admin'
  const validateUserSeller = isLogin && roleUser === 'seller'

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/admin' element={
          validateUserAdmin ? <AddSeller /> : <h1>No tienes permisos de administrador</h1>
        } />

        <Route path='/list-sellers' element={
          validateUserAdmin ? <ListSeller /> : <h1>No tienes permisos de administrador</h1>
        } />

        <Route path='/top-sellers' element={
          validateUserAdmin ? <TopSellers /> : <h1>No tienes permisos de administrador</h1>
        } />

        <Route path='/seller' element={
          validateUserSeller ? <h1>seller</h1> : <h1>No tienes permisos</h1>
        } />

        <Route path='/seller/add-sale' element={
          validateUserSeller ? <Sales /> : <h1>No tienes permisos</h1>
        } />

        <Route path='/seller/list-sales' element={
          validateUserSeller ? <GetSales /> : <h1>No tienes permisos</h1>
        } />

        <Route path='/seller/add-product' element={
          validateUserSeller ? <Product /> : <h1>No tienes permisos</h1>
        } />

        <Route path='/seller/list-products' element={
          validateUserSeller ? <GetProducts /> : <h1>No tienes permisos</h1>
        } />

      </Routes>
    </div>
  )
}

export default App
