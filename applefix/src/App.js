// Imports
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

// Code
const App = () => {
    const saludo = 'Bienvenido a AppleFix App'

    return (
        <div className="App">
            <header className="App__header">
                <NavBar />
            </header>
            <main>
                <ItemListContainer greeting={saludo} />
            </main>
        </div>
    );
}

// Export
export default App;
