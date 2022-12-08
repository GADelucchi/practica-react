//Imports
import { Link } from "react-router-dom"

//Code
const Item = ({ producto }) => {
    return (
        <div className='ItemListContainer__producto__card'>
            <img src={producto.img} className='ItemListContainer__producto__img' alt={producto.name} key={producto.id} />
            <Link to={`/item/${producto.id}`} className="Item__link"><p>{producto.name}</p></Link>
        </div>
    )
}

//Export
export default Item