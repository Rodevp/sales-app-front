import { useEffect, useState } from 'react'

function GetSales() {
    
    const user = JSON.parse( localStorage.getItem('user') )
    const URL = `http://localhost:3001/api/v1/sales/seller/${user.id}`

    const [sales, setSales] = useState([])

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
    <div>get-sales</div>
  )

}

export default GetSales