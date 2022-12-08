// Imports
import Item from "../Item/Item"
import '../Item/Item.css'
import { productos } from "../../mock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Code
const ItemListContainer = () => {
    const [item, setItem] = useState(productos)
    const { id } = useParams()

    const filterCategory = new Promise((resolve) => {
        setTimeout(() => {
            let newProductos = productos.filter((p) => p.category === id)
            resolve(newProductos)
        }, 200);
    })

    useEffect(() => {
        filterCategory.then((response) => {
            setItem(response)
        })
    }, [id])

    return (
        <div className='ItemListContainer'>
            {
                item.map((producto) => {
                    return <Item producto={producto} key={producto.id} />
                })
            }
        </div>
    )
}

// Exports
export default ItemListContainer