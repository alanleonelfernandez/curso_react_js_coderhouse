import React, {useState} from 'react'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {products} from '../ItemList/Items'

const ItemListContainer = (props)=>{
    const [items, setItems] = useState([])
    const traerProductos = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
    traerProductos
    .then((res)=>{
        setItems(res)
    })
    .catch((error)=>{
        console.log(error)
    })
    return(
        <>
            <h1>{props.greeting}</h1>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer