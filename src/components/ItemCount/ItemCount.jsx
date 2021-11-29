import React, {useState} from "react";
import './itemCount.css'

const ItemCount = ({stock, onAdd})=>{
    const [number, setNumber] = useState(0)

    const incrementar = ()=>{
        number !== stock && setNumber(number + 1);
    }
    const disminuir = ()=>{
        number !== 0 && setNumber (number - 1);
    }


    return(
        <>
            <div className="contador">
                <button onClick={incrementar}>+</button>
                <button onClick={disminuir}>-</button>
                <p>{number}</p>
                <button disabled={number === 0} onClick={()=> onAdd(number)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount