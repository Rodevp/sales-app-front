import { useState } from 'react'

function Product() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const user = JSON.parse(localStorage.getItem('user'))

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
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))

    }

    return (
        <div>
            <h1 className="form-outline mt-4">
                Agregar producto
            </h1>
            <form onSubmit={submitData} className="form-outline mt-4">
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <label className="form-label" htmlFor="form2Example1">Nombre Producto</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="text"
                        id="form2Example2"
                        className="form-control"
                        onChange={(e) => { setPrice(Number(e.target.value)) }}
                    />
                    <label className="form-label" htmlFor="form2Example2">Precio</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Agregar</button>
            </form>
        </div>
    )
}

export default Product