// Imports

// Code
const Item1 = () => {
    const productos = [{ id: 1, name: 'Módulos', price: 100, stock: 3 },
    { id: 2, name: 'Baterías', price: 50, stock: 8 },
    { id: 3, name: 'Cámaras', price: 200, stock: 5 }]
    return (
        <>
            <div className="card">
                <h2>{productos[0].name}</h2>
            </div>
        </>
    )
}

// Exports
export default Item1