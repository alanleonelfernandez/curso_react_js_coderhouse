import '../ItemList/item.css'
import React from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({item, onAdd, irAlCarrito})=>{
    return(
        <div className="cardItem">
            <img src={item.img} alt="producto" />
            <h2>{item.name}</h2>
            <p>AR${item.price}</p>
            {irAlCarrito ? (
                <>
                    <Link to="/cart">Terminar Compra</Link>
                </>
            ) : (
                <>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </>
            )}
            
            
        </div>
    )
};

export default ItemDetail;