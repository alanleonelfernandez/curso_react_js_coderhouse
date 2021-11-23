
import './header.css'
import './CartWidget/CartWidget'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><img src="https://res.cloudinary.com/alanleonelfernandez/image/upload/v1637114399/jugador-de-futbol_jmmw4o.png" alt="futbol" className="icon"/></li>
                    <li><a href="#" className="navName">ARM Boots</a></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">News</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/">About</Link></li>
                    <a href="#" className="botonCarrito">
                        <CartWidget />
                    </a>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header