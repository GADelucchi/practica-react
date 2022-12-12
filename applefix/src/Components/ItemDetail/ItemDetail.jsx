//Imports
import ItemCount from "../ItemCount"

//Code
const ItemDetail = ({item}) => {
    return(
        <div >
            <h2>Detalle de {item.name}</h2>
            <img src={item.img} className='ItemListContainer_producto_img' alt={item.name}  />
            <ItemCount />
        </div>
    )
}

//Export
export default ItemDetail