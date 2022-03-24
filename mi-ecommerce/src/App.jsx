import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {

  return (
    <>
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar/>
          </header>
        </div>
        <Routes>  
          <Route 
            path="/" 
            element={<ItemListContainer/>}/>
          <Route 
            path="/type/:id" 
            element={<ItemListContainer/>}/>
          <Route 
            path="/detalle/:detalleId" 
            element={<ItemDetailContainer/>}/> 
          <Route path="/*" element={<Navigate to="/"/>}/>
          <Route 
              path="/cart" 
              element={<Cart/>}/> 
        </Routes>
    </BrowserRouter>
    </>
        
  );
}

export default App;
