// Imports
import './App.css';

import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Code
const App = () => {
    const saludo = 'Bienvenido a AppleFix App'

    return (
        <BrowserRouter className="App">
            <NavBar />
            <Routes>
                <Route exact path='/' element={<ItemListContainer greeting={saludo} />} />
                {/* <Route exact path='/repuestos' element={<Repuestos />} />
                <Route exact path='/equipos' element={<Equipos />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

// Export
export default App;
