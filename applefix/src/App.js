// Imports
import './App.css';

import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer';

import {menus, categorias} from './mock'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Code
const App = () => {
    return (
        <BrowserRouter className="App">
            <NavBar menus={menus} categorias={categorias} />
            <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/category/:id' element={<ItemListContainer />} />
                <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

// Export
export default App;
