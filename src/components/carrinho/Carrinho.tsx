import { useContext } from "react";
import "./carrinho.css";
import { Context } from "../../contexts/Context";



export const Carrinho = () => {

  const { state, dispatch } = useContext(Context);



  return (<>
    <h3>CARRINHO</h3>
    <div className="cart-area">

      <div className="cart-itens-area">
        {state.cart.map((item, index) => (

          <div key={index} className="cart-item-area">
            <img className="cart-item-img" src={item.image} alt="item" />
            <div className="cart-item-title">{item.title}</div>

          </div>
        ))
        }
      </div>
    </div>
  </>
  )

}