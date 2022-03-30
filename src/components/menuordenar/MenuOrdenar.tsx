import "./menuordenar.css";
import { Context } from "../../contexts/Context"
import { useContext } from "react";


export const MenuOrdenar = () => {

  const { state, dispatch } = useContext(Context);

  const lowerPrice = () => {

    if (state.main.lowerprice === false) {
      dispatch({
        type: "CHANGE_LOWERPRICE",
        payload: {
          lowerprice: true
        }
      })
    } else {
      dispatch({
        type: "CHANGE_LOWERPRICE",
        payload: {
          lowerprice: false
        }
      })
    }

  }

  return (
    <div>
      <h3>ORDENAR</h3>

      <div className="menuordenar">
        <ul>
          <li><input type="checkbox" onClick={lowerPrice}></input>Preço menor</li>

        </ul>
      </div>
    </div>
  )

}