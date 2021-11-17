import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './item.css'

const Item = ({item})=>{
    return <div>
        <div className="cardItem">
            <img src={item.img} alt="producto"/>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <ItemCount />
        </div>
    </div>
};

export default Item