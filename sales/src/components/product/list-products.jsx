import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function GetProducts() {

  const user = JSON.parse(localStorage.getItem('user'))
  const URL = `http://localhost:3001/api/v1/product/seller-sales/${user.id}`

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
      .catch(error => console.error(error))


  }, [])


  return (
    <div>

      <h2 className="mt-4 mb-4">
        Lista de productos
      </h2>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Id vendedor</th>
            <th>Id venta</th>
          </tr>
        </thead>
        <tbody>
          {
            products === undefined
              ? <h1>cargando...</h1>
              : products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.nameProduct}</td>
                  <td>{product.idSeller}</td>
                  <td>{product.idSales}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <div className="mt-2">
        <Link to='/seller' >Ir al home</Link>
      </div>
    </div>
  )

}

export default GetProducts