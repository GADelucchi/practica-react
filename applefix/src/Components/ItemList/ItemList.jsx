// Imports
import Item from "../Item"
import '../Item/Item.css'



// Code
const ItemList = ({item}) => {
    

    return (
        <div className="ItemList">
            {
                item.map((producto) => {
                    return <Item producto={producto} key={producto.id} />
                })
            }
        </div>
    )
}

// Exports
export default ItemList