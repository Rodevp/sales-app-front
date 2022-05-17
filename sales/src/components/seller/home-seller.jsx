import { useNavigate } from 'react-router-dom'

function HomeSeller() {

    const navigate = useNavigate()

    const logout = (_e) => {
        localStorage.clear()
        navigate('/')
    }


  return (
    <div>
        home-seller 
        <button onClick={logout}>
            Salir
        </button>
    </div>
  )
}

export default HomeSeller