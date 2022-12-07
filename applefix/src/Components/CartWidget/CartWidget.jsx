// Imports
import Carrito from '../../carrito-de-compras.svg'

// Code
const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <img src={Carrito} className='CartWidget__img' alt='Logo de Carrito' />
            <span className='CartWidget__span'>7</span>
        </div>
    )
}

// Exports
export default CartWidget