
import './header.css'
import './CartWidget/CartWidget'
import CartWidget from './CartWidget/CartWidget'

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><img src="../media/jugador-de-futbol.png" alt="futbol" className="icon"/></li>
                    <li><a href="#" className="navName">ARM Boots</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <a href="#" className="botonCarrito">
                        <CartWidget />
                    </a>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header