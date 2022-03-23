import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//Se importa bootstrap con componentes
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
          <img src={logo} className="App-logo" alt="logo" />  
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
          <Route 
              path="/cart" 
              element={<Cart/>}/> 
          <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    </BrowserRouter>
    </>
        
  );
}

export default App;
