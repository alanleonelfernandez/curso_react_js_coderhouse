import '../ItemList/item.css'
import React from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item})=>{
    return(
        <div className="cardItem">
            <img src={item.img} alt="producto" />
            <h2>{item.name}</h2>
            <p>AR${item.price}</p>
            <ItemCount />
        </div>
    )
};

export default ItemDetail;