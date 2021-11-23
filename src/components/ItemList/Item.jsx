import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetail from '../ItemDetail/ItemDetail'
import './item.css';

const Item = ({item})=>{
    return <div>
        <div className="cardItem">
            <img src={item.img} alt="producto"/>
            <h2>{item.name}</h2>
            <p>AR${item.price}</p>
            <ItemDetail />
            <ItemCount />
        </div>
    </div>
};

export default Item