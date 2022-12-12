// Imports
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList'
import { useEffect, useState } from "react"
import { productos, categorias } from "../../mock"
// Code
const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()
    const filterCategory = new Promise((resolve) => {
        setTimeout(() => {
            let newProductos = productos.filter((p) => p.category === id)
            if(id){
                resolve(newProductos)
            }else{
                resolve(productos)
            }
        }, 200);
    })

    useEffect(() => {
        filterCategory.then((response) => {
            setItem(response)
        })
    }, [id])
    return (
        <div className='ItemListContainer'>
            <ItemList item={item}/>
        </div>
    )
}

// Exports
export default ItemListContainer