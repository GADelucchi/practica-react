// Imports
import Item from "../Item/Item"
import { productos, categorias } from "../../mock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Code
const ItemListContainer = () => {
    const [item, setItem] = useState(productos)
    const { id } = useParams()

    const filterCategory = new Promise((resolve, reject) => {
        setTimeout(() => {
            let newProductos = item.filter((p) => p.category == id)
            resolve(newProductos)
        }, 2000);
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