import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function GetSales() {

  const user = JSON.parse(localStorage.getItem('user'))
  const URL = `http://localhost:3001/api/v1/sales/seller/${user.id}`

  const [sales, setSales] = useState([])

  console.log(sales)

  useEffect(() => {

    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setSales(data)
      })
      .catch(error => console.error(error))


  }, [])


  return (
    <div>
      <h1 className="mt-4 mb-4">
        Tabla de ventas
      </h1>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>id vendedor</th>
            <th>valor</th>
          </tr>
        </thead>
        <tbody>
          {
            sales === undefined
              ? <h1>cargando...</h1>
              : sales.map(sale => (
                <tr key={sale.id}>
                  <td>{sale.id}</td>
                  <td>{sale.name}</td>
                  <td>{sale.idSeller}</td>
                  <td>${sale.valueSale === null ? 0 : sale.valueSale}</td>
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

export default GetSales