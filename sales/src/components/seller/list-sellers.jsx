import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListSeller() {

    const [sellers, setSellers] = useState([])

    useEffect(() => {

        fetch('http://localhost:3001/api/v1/admin', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                const sellers = data.filter(user => user !== null)
                setSellers(sellers)
            })
            .catch(error => console.error(error))

    }, [])

    console.log(sellers)

    return (
        <div>
            <h2 className="mt-4 mb-4">
                Lista de vendedores
            </h2>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers === undefined
                            ? <h1>cargando...</h1>
                            : sellers.map(seller => (
                                <tr key={seller.id}>
                                    <td>{seller.id}</td>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
            <div className="mt-2">
                <Link to='/admin' >Ir al home</Link>
            </div>
        </div>
    )
}

export default ListSeller