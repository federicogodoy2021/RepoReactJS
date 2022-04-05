import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './context/CartContext';


function App() {

  return (
<>
  <BrowserRouter>
      <CartContextProvider >
        <div className="App">
        <NavBar/>
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
        </div>
      </CartContextProvider>
  </BrowserRouter>
</>
        
  );
}

export default App;
