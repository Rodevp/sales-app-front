import { useState } from 'react'

function Product() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const user = JSON.parse( localStorage.getItem('user') )

    const submitData = (e) => {
        e.preventDefault()
        const data = {
            name,
            price,
            id_seller: user.id,
            id_sale: 1
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
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => { setName(e.target.value) } }/>
            </div>
            <div>
                <label htmlFor="">Precio</label>
                <input type="text" onChange={(e) => { setPrice( Number(e.target.value) ) } }/>
            </div>
            <input type="submit" value="Agregar producto" />
        </form>
    </div>
  )
}

export default Product