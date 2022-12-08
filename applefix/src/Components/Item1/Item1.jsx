// Imports

// Code
const Item1 = () => {
    const productos = [{
        id: 1,
        name: 'Módulos',
        description: 'Pantallas para iPhones'
    },
    {
        id: 2,
        name: 'Baterías',
        description: 'Baterías para iPhones'
    },
    {
        id: 3,
        name: 'Cámaras',
        description: 'Cámaras traseras de iPhones'
    }]

    return (
        <div className="Item1__div">
            <h2>{productos[0].name}</h2>
            <p>{productos[0].description}</p>
        </div>
    )
}

// Exports
export default Item1