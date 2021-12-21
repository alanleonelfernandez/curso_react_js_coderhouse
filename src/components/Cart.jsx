import React, { useContext } from "react";
import './cart.css';
import { CartContext, useBorrarProducto } from "../context/CartContext";

const borrarProducto = useBorrarProducto;

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
                    <p>Total: AR${(item.price * item.cantidad)}</p>
                    <button onClick={()=>borrarProducto(item)}>Quitar producto</button>
                </div>
            </div>
        ))}
    </>
}

export default Shop;