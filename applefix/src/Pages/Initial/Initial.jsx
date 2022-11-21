// Imports
import './Initial.css';
import NavBar from '../../Components/NavBar'
import ItemListContainer from '../../Components/ItemListContainer'
import Img1 from '../../Components/Img1'

// Code
const Initial = () => {
    return (
        <div className="Initial">
            <header className="Initial__header">
                <NavBar />
            </header>
            <main>
                <ItemListContainer>
                    <h1 className='ItemListContainer__h1'>Bienvenido a AppleFix App</h1>
                    <Img1 />
                </ItemListContainer>
            </main>
        </div>
    );
}

// Exports
export default Initial;
