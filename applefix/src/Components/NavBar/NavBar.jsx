// Imports
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import logo from '../../logo-sin-fondo.png'

// Code
const NavBar = ({ menus, categorias}) => {
    return (
        <div className="NavBar">
            <div>
                <img src={logo} className='NavBar__logo' alt='Logo AppleFix' />
                <Link to="/" className="NavBar__menu">AppleFix Reparaciones</Link>
            </div>

            <div className="Nav">
                {
                    menus.map((menu) => {
                        return <Link className='NavBar__menu' to={menu.href} key={menu.id}>{menu.name}</Link>
                    })
                }
                {
                    categorias.map((categoria) => {
                        return <Link className='NavBar__category' to={`/category/${categoria.id}`} key={categoria.id}>{categoria.name}</Link>
                    })
                }

                <button className='NavBar__button__CartWidget'>
                    <CartWidget />
                </button>
            </div>
        </div>
    );
}

// Exports
export default NavBar;