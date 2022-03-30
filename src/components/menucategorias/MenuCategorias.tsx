import "./menucategorias.css";
import { Link } from "react-router-dom";

export const MenuCategorias = () => {

  return (
    <div>

      <h3>CATEGORIAS</h3>
      <div className="menucategorias">
        <ul>
          <li><Link to="/">Todas</Link></li>
          <li><Link to="/masculinas">Masculinas</Link></li>
          <li><Link to="/femininas">Femininas</Link></li>
          <li><Link to="/joias">Jóias</Link></li>
          <li><Link to="/eletronicos">Eletrônicos</Link></li>
        </ul>
      </div>
    </div>
  )

}