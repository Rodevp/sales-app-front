import { useEffect, useState } from 'react'

function TopSellers() {

    const [sales, setSales] = useState([])

    useEffect(() => {
        
        fetch('http://localhost:3001/api/v1/admin/sales', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id')}`
            },
        })
        .then( res => res.json() )
        .then( data => {
            const sales = data.filter(sale => sale !== null)
            setSales(sales)
        } )
        .catch( error => console.error(error) )

    }, [])
    
    console.log(sales)

  return (
    <div>
        {
            sales === undefined 
                ? <h2>Cargando..</h2> 
                : sales.map(sale => (
                    <p key={sale.id}>{sale.name}</p>
                ))
        }
    </div>
  )
}

export default TopSellers