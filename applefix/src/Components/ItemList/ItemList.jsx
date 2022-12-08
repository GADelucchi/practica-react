// Imports
import Item1 from '../Item1'
import Item2 from '../Item2/'
import Item3 from '../Item3'

// Code
const ItemList = (product) => {
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
        <div className='ItemList__div'>
            <Item1 product={productos[0]} />
            <Item2 product={productos[1]} />
            <Item3 product={productos[2]} />
        </div>
    )
}

// Exports
export default ItemList