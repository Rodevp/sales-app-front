import { useEffect, useState } from 'react'

function GetProducts() {
    
    const user = JSON.parse( localStorage.getItem('user') )
    const URL = `http://localhost:3001/api/v1/product/seller-sales/${user.id}`

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ localStorage.getItem('id') }`
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
      {
        
        products === undefined
          ? <h1>cargando...</h1>
          : products.map(product => (
            <p key={product.id}>{product.nameProduct}</p>
          )) 
      
      }
    </div>
  )

}

export default GetProducts