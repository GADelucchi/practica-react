// Imports
import Proptype from 'prop-types'

// Code
const ItemListContainer = ({children}) => {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}

ItemListContainer.prototype = {
    children: Proptype.element
}

// Exports
export default ItemListContainer