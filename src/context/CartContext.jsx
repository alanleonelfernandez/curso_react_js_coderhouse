import React, { useContext, useState, useEffect } from 'react';
import { getDocs, collection, getFirestore } from '@firebase/firestore'

export const CartContext = React.createContext()

export const CartProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const db = getFirestore()
        const ref = collection(db, "products")
        getDocs(ref)
        .then((snapShot)=>{
            snapShot.docs.map((product) => setProducts(prev=> ([...prev, product.data()])))
        })
    })

    const addToCart = (item, cantidad)=>{

        setCart([
            ...cart, {...item, cantidad}
        ]);
    };

    const borrarProducto = (product)=>{
        setCart(cart.filter(item => item.id !== product.id))
    }

    return(
        <CartContext.Provider value={{addToCart, cart, borrarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export function useBorrarProducto(){
    return useContext(CartContext).borrarProducto;
}

export default CartContext
