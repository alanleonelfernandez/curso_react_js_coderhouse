import React from 'react'
import Item from './Item'
import './itemList.css'

const ItemList = ({items})=>{
    return(
        <div className="padreItems">
            {items.map((item)=>(
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;