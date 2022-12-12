//Imports
import ItemDetail from "../ItemDetail"
import { productos } from "../../mock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//Code
const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    const getOne = new Promise((resolve) => {
        setTimeout(() => {

            resolve(productos.find((prod) => prod.id === parseInt(id)))
        }, 200);
    })

    useEffect(() => {
        getOne.then((response) => {
            setItem(response)
        })
    }, [id])
    return (
        <ItemDetail item={item} />
    )
}

//Export
export default ItemDetailContainer