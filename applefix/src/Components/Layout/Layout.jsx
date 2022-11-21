// Imports
import Proptypes from 'prop-types'

// Code
const Layout = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

Layout.prototype = {
    children: Proptypes.element.isRequired
}

// Exports
export default Layout