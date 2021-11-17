import {useState} from "react";
import './itemCount.css'

const ItemCount = ()=>{
    const [number, setNumber] = useState(1)

    const incrementar = ()=>{
        if(number < 7){
            setNumber(number + 1)
        }else{
            alert("Stock maximo alcanzado")
        }
        
    }
    const disminuir = ()=>{
        if(number >= 2){
            setNumber(number - 1)
        }else{
            setNumber(number)
        }

    }
    return(
        <>
            <div className="contador">
                <button onClick={incrementar}>+</button>
                <button onClick={disminuir}>-</button>
                <p>{number}</p>
                <button>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount