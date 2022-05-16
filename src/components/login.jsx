import { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                <label htmlFor="">Contraseña</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) } } />
            </div>
            <input type="submit" value="Entrar" />
        </form>
    </div>
  )
}

export default Login