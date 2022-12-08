//Imports

//Code
const Item = ({ producto }) => {
    return (
        <div className='ItemListContainer__producto__card'>
            <img src={producto.img} className='ItemListContainer__producto__img' alt={producto.name} key={producto.id} />
            <h2>{producto.name}</h2>
        </div>
    )
}

//Export
export default Item