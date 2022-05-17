import { useNavigate } from 'react-router-dom'

function HomeSales() {

    const navigate = useNavigate()

    const logout = (_e) => {
        localStorage.clear()
        navigate('/')
    }


  return (
    <div>
        home-sales
        <button onClick={logout}>
            Salir
        </button>
    </div>
  )
}

export default HomeSales