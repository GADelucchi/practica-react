// Imports
import { useState } from 'react';

// Code
const ItemCount = (onAdd) => {
    const [count, setCount] = useState(0)

    return (
        <div className="ItemCount__div">
            <div className="ItemCount__div">
                <button className="ItemCount__button" onClick={() => setCount(count - 1)}>-</button>
                <h2>{count}</h2>
                <button className="ItemCount__button" onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className="ItemCount__button" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}


// Exports
export default ItemCount