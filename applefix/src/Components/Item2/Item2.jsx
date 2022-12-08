// Imports

// Code
const Item2 = (product) => {
    return (
        <div className="Item2__div">
            <h2 product={product}>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    )
}

// Exports
export default Item2