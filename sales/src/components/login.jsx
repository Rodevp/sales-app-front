import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//jotai
import { loginState } from '../atoms/login'
import { role } from '../atoms/role'
import { useAtom } from 'jotai' 

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const [, setLogin] = useAtom(loginState)
    const [,setRole] = useAtom(role)

    const submitData = (e) => {
        e.preventDefault()
        const data = {
            email,
            password,
        }
        fetch('http://localhost:3001/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( res => {

            res.status !== 200 ? navigate('/', {replace: true}) : console.log('OK')

            return res.json()

        })
        .then( data => {
            
            localStorage.setItem('id', data.token )
            localStorage.setItem('user', JSON.stringify(data.user) )
            localStorage.setItem('role', data.user.role)
            
            if (data.user.role === 'admin') {
                setLogin(true)
                setRole(data.user.role)
                navigate('/admin')
            }

            if (data.user.role === 'seller') {
                setLogin(true)
                setRole(data.user.role)
                navigate('/seller')
            }


        })
        .catch( error => console.error(error) )

    }

  return (
    <div>
        <form onSubmit={submitData}>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) } }/>
            </div>
            <div>
                <label htmlFor="">Contraseña</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) } } />
            </div>
            <input type="submit" value="Entrar" />
        </form>
        <div>
            ¿No tienes cuenta? ve a: <Link to='/register' >Registrarse</Link>
        </div>
    </div>
  )
}

export default Login