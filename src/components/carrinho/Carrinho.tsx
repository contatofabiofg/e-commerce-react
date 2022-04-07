import { useContext, useState, useEffect } from "react";
import "./carrinho.css";
import { Context } from "../../contexts/Context";





export const Carrinho = () => {

  const { state, dispatch } = useContext(Context);
  let priceitem: number;
  let pricetotal: number = 0;



  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (state.cart.length !== 0) {

      for (var prop in state.cart) {
        priceitem = state.cart[prop].qt! * state.cart[prop].price!;
        pricetotal += priceitem;
        setTotal(pricetotal);
      }

    } else {
      setTotal(0);
    }


  }, [state.cart]);


  const deleteitem = (i: number) => {
    dispatch({
      type: "DEL_CART",
      payload: { i }
    });
  }

  const addCartItemNumber = (i: number) => {
    dispatch({
      type: "ADD_CART_ITEM_NUMBER",
      payload: { i }
    });
  }

  const delCartItemNumber = (i: number) => {
    dispatch({
      type: "DEL_CART_ITEM_NUMBER",
      payload: { i }
    });
  }

  let decimal = (a: number, b: number) => {
    let resultado = a * b;
    return resultado.toFixed(2)
  }

  if (total == 0) {
    return <div></div>
  } else {
    return (<>


      <div className="cart-area">

        <h3>CARRINHO</h3>

        <div className="cart-itens-area">
          {state.cart.map((item, index) => (





            <div key={index} className="cart-item-area">
              <img className="cart-item-img" src={item.image} alt="item" />
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-qt-area">
                <div onClick={() => delCartItemNumber(index)}>-</div>
                <div>{item.qt}</div>
                <div onClick={() => addCartItemNumber(index)}>+</div>
              </div>
              <div className="cart-item-value">R$ {decimal(item.price!, item.qt!)}</div>
              <div className="cart-item-delete" onClick={() => deleteitem(index)}>
                <div className="cart-item-delete-img"></div>
              </div>

            </div>




          ))

          }


          <h3 className="cart-item-total">Total: R$ {total.toFixed(2)}</h3>
        </div>
      </div>
    </>
    )

  }




}