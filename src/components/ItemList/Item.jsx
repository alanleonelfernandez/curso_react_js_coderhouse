import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './item.css';
import { Link } from 'react-router-dom'

const Item = ({item})=>{
    return <div>
        <div className="cardItem">
            <Link to={`/item/${item.id}`}>
                <img src={item.img} alt="producto"/>
            </Link>
            <h2>{item.name}</h2>
{/*             <p>AR${item.price}</p>
            <ItemCount stock={item.stock} /> */}
        </div>
    </div>
};

export default Item