import React, {useEffect, useState} from 'react'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = ()=>{
    const [items, setItems] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const ref = collection(db, 'products');
        getDocs(ref)
        .then((snapshot) => {
            const products = snapshot.docs.map((doc)=>{
                return{
                    id: doc.id,
                    ...doc.data(),
                };
            });
            const categorias = products.filter((i)=> i.categorias === `${id}`);
            id === undefined ? setItems(products) : setItems(categorias)
        });
    }, [id]);

    return(
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer