import React, { useContext } from "react";
import './cart.css';
import { CartContext } from "../context/CartContext";

const Shop = ()=>{
    const {cart} = useContext(CartContext)
    return <>
        {cart.map((item)=>(
            <div className="padreCarrito">
                <div key={item.id} className="carrito">
                    <img src={item.img} alt="producto" />
                    <p>{item.name}</p>
                    <p>AR${item.price}</p>
                    <p>X{item.cantidad}</p>
                    <p>Total: AR${(item.price * item.cantidad).toFixed(2)}</p>
                </div>
            </div>
        ))}
    </>
}

export default Shop;