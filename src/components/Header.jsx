
import './header.css'
import './CartWidget/CartWidget'
import CartWidget from './CartWidget/CartWidget'

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><img src="https://cdn-icons.flaticon.com/png/512/919/premium/919471.png?token=exp=1636394899~hmac=42a141e517e55ee47b65894dfaacd39f" alt="futbol" class="icon"/></li>
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