import { useState } from 'react'
import uuid from 'uuid-random'

function AddSeller() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitData = (e) => {
        e.preventDefault()
        const data = {
            id: uuid(),
            name,
            email,
            password,
            role: 'seller'
        }
        console.log(data)
        fetch('http://localhost:3001/api/v1/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('id')}`
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json() )
        .then( data => console.log(data) )
        .catch( error => console.error(error) )

    }

  return (
    <div>
        <h2>Agregar Vendedor</h2>
        <form onSubmit={submitData}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => { setName(e.target.value) } }/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => { setEmail( e.target.value ) } }/>
            </div>
            <div>
                <label htmlFor="">Contraseña</label>
                <input type="password" onChange={(e) => { setPassword( e.target.value ) } }/>
            </div>
            <input type="submit" value="Crear Vendedor" />
        </form>
    </div>
  )
}

export default AddSeller