import { useEffect, useState } from 'react'

function ListSeller() {

    const [sellers, setSellers] = useState([])

    useEffect(() => {
        
        fetch('http://localhost:3001/api/v1/admin', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id')}`
            },
        })
        .then( res => res.json() )
        .then( data => {
            const sellers = data.filter(user => user !== null)
            setSellers(sellers)
        } )
        .catch( error => console.error(error) )

    }, [])
    
    console.log(sellers)
  return (
    <div>
        {
            sellers === undefined 
                ? <h2>Cargando..</h2> 
                : sellers.map(seller => (
                    <p>{seller.email}</p>
                ))
        }
    </div>
  )
}

export default ListSeller