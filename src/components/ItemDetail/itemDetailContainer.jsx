import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {products} from '../ItemList/Items'

const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const traerProducto = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products)
            }, 2000)
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
    return(
        <>
            <ItemDetail item={item} />
        </>
    );
};

export default ItemDetailContainer