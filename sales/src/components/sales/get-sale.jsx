import { useEffect, useState } from 'react'

function GetSale() {
    
    const URL = `http://localhost:3001/api/v1/sales/1`

    const [sale, setSale] = useState({})

    useEffect(() => {

        fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ localStorage.getItem('id') }`
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))


    }, [])


  return (
    <div>get-sale</div>
  )

}

export default GetSale