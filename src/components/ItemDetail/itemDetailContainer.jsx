import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {products} from '../ItemList/Items'
import { CartContext } from '../../context/CartContext'

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [irAlCarrito, setIrAlCarrito] = useState(false);
    const {addToCart} = useContext(CartContext);

    useEffect(()=>{
        const traerProducto = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products)
            }, 500)
        });
        traerProducto
            .then((res)=>{
                const producto = res.find(
                    (prod) => prod.id === parseInt(id)
                );
                setItem(producto)
                
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id]);

    const onAdd = (cantidad)=>{
        addToCart(item, cantidad)

        setIrAlCarrito(true);
    }

    return(
        <>
            <ItemDetail item={item} onAdd={onAdd} irAlCarrito={irAlCarrito}/>
        </>
    );
};

export default ItemDetailContainer