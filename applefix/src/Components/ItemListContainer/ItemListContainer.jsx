// Imports
import ItemCount from "../ItemCount"
import ItemList from "../ItemList"

// Code
const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount />
            <ItemList />
        </div>
    )
}

// Exports
export default ItemListContainer