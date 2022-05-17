import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import uuid from 'uuid-random'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitData = (e) => {
        e.preventDefault()
        const data = {
            id: uuid(),
            email,
            name,
            password,
            role: 'admin'
        }
        fetch('http://localhost:3001/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status !== 201) {
                    navigate('/register')
                } else {
                    navigate('/')
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <h2 className='mt-4'>
                Registrarse
            </h2>
            <form onSubmit={submitData} className="form-outline mt-4">
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <label className="form-label" htmlFor="form2Example1">Email</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="text"
                        id="form2Example2"
                        className="form-control"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <label className="form-label" htmlFor="form2Example2">Nombre</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="password"
                        id="form2Example3"
                        className="form-control"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <label className="form-label" htmlFor="form2Example3">Contraseña</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Registrar</button>
                <div className="text-center">
                    <Link to='/'> Ir a login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register