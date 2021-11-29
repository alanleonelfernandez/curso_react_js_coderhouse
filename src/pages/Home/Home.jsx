import './home.css'
import { Link } from 'react-router-dom'

const Home = ()=>{
    return <>
            <div className="homePadre">
                <div className="homeCard">
                    <h1>BIENVENIDOS A ARM BOOTS</h1>
                    <p>Click en la imagen para acceder al e-commerce</p>
                    <a href="/Products"><img src="https://www.marketingregistrado.com/img/noticias/coleccionista-botines.png" alt="home"/></a>
                </div>
            </div>
        </>
}

export default Home