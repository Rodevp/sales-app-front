import { useState } from 'react'
import uuid from 'uuid-random'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(name, email, password)

    const submitData = (e) => {
        e.preventDefault()
        const data = {
            id: uuid(),
            email,
            name,
            password,
            role: 'admin'
        }
        console.log(data)
        fetch('http://localhost:3001/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json() )
        .then( data => console.log(data) )
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
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => { setName(e.target.value) } }/>
            </div>
            <div>
                <label htmlFor="">Contraseña</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) } } />
            </div>
            <input type="submit" value="Registrar" />
        </form>
    </div>
  )
}

export default Register