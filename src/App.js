import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import "./App.css"
import SendOrder from './components/Cart/SendOrder';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar name="ROMA PASTAS"/>
          <Routes>
            <Route index element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/sendOrder" element={<SendOrder />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
