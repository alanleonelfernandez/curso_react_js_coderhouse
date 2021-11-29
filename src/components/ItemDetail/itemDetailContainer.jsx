import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {products} from '../ItemList/Items'

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [irAlCarrito, setIrAlCarrito] = useState(false);

    useEffect(()=>{
        const traerProducto = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products)
            }, 1500)
        });
        traerProducto
            .then((res)=>{
                const producto = res.find(
                    (prod) => prod.id === parseInt({id})
                );
                setItem(producto)
                
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id]);

    const onAdd = (cantidad)=>{
        setIrAlCarrito(true);
    }

    return(
        <>
            <ItemDetail item={item} onAdd={onAdd} irAlCarrito={irAlCarrito}/>
        </>
    );
};

export default ItemDetailContainer