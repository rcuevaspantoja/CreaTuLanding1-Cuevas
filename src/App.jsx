import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./components/404/Error404"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import "./styles/index.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer titulo={"Artículos en Venta"} />} />
        <Route path="/comida" element={<ItemListContainer titulo={"Comida"} categoria={"comida"}/> } />
        <Route path="/bebidas" element={<ItemListContainer titulo={"Bebestibles"} categoria={"bebida"}/> } />
        <Route path="/aseo" element={<ItemListContainer titulo={"Aseo e Higiene"} categoria={"aseo"}/> } />
        <Route path="/producto/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>

      <Footer />
    </BrowserRouter>

  );
}
export default App;
