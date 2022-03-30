import { Catalogo } from "./components/catalogo/Catalogo";
import { Carrinho } from "./components/carrinho/Carrinho";
import { MenuCategorias } from "./components/menucategorias/MenuCategorias";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import { MenuOrdenar } from "./components/menuordenar/MenuOrdenar";

function App() {



  return <div className="app">
    <div className="leftarea">
      <MenuCategorias />
      <MenuOrdenar />
    </div>
    <div className="centerarea">
      <Routes>
        <Route path="/" element={<Catalogo />}></Route>
        <Route path="/:categoria" element={<Catalogo />}></Route>
      </Routes>
    </div>
    <div className="rightarea">
      <Carrinho />
    </div>
  </div>
}

export default App;