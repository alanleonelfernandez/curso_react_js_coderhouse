
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
                    <li><a href="/" className="navName">ARM Boots</a></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/News">News</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <Link to="/Cart" className="botonCarrito">
                        <CartWidget />
                    </Link>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header