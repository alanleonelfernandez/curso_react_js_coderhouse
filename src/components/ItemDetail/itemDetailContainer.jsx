import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const ref = doc(db, 'products', id);
        getDoc(ref).then((snap)=>{
            setItem({
                id: snap.id,
                ...snap.data(),
            });
        });
    }, [id]);

    return(
        <>
            <ItemDetail item={item}/>
        </>
    );
};

export default ItemDetailContainer

// onAdd={onAdd} irAlCarrito={irAlCarrito}