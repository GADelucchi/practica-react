// Imports
import ItemCount from "../ItemCount"
import ItemList from "../ItemList"

// Code
const ItemListContainer = ({ greeting }) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemList)
        }, 2000);
    })
    
    promise.then(res => {
        console.log(res);
    })
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