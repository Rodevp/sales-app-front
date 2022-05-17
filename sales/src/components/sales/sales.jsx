import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Sales() {

    const [name, setName] = useState('')
    const [totalSales, _] = useState(0)
    const user = JSON.parse( localStorage.getItem('user') )

    const navigate = useNavigate()

    const submitData = (e) => {
        e.preventDefault()
        const data = {
            name,
            totalSales,
            id_seller: user.id,
        }
        console.log(data)
        fetch('http://localhost:3001/api/v1/sales', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('id')}`
            },
            body: JSON.stringify(data)
        })
        .then( res => {
            if(res.status === 201) {
                navigate('/seller/list-sales')
            }
        } )
        .catch( error => console.error(error) )

    }

  return (
    <div>
        <h2>Agreagr Venta</h2>
        <form onSubmit={submitData}>
            <div>
                <label htmlFor="">Nombre Venta</label>
                <input type="text" onChange={(e) => { setName(e.target.value) } }/>
            </div>
            <input type="submit" value="Crear Venta" />
        </form>
    </div>
  )
}

export default Sales