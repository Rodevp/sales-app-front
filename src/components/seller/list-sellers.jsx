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
        .then( data => console.log(data) )
        .catch( error => console.error(error) )

    }, [])
    

  return (
    <div>
        list sellers
    </div>
  )
}

export default ListSeller