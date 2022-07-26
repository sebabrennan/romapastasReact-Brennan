import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar name="ROMA PASTAS"/>
        <Routes>
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>}/>
          <Route path="/cart" element={<div>Cart page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
