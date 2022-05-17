import { useState } from 'react'

function Sales() {

    const [name, setName] = useState('')
    const [totalSales, _] = useState(0)
    const user = JSON.parse( localStorage.getItem('user') )

    const submitData = (e) => {
        e.preventDefault()
        const data = {
            name,
            totalSales,
            id_seller: user.id,
        }
        console.log(data)
        fetch('http://localhost:3001/api/v1/product', {
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