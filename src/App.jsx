import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./styles/index.css"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje={"Hola, qué tal?"}/>
    </div>
  );
}

export default App;
