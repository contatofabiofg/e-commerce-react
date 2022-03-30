import { useState, useEffect, useContext } from "react";
import "./catalogo.css";
import { useParams } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { Produto } from "../../types/produtoType";





export const Catalogo = () => {

  const { state, dispatch } = useContext(Context);
  const params = useParams();
  const [lista, setLista] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(false);
  let categoria: string;


  useEffect(() => {
    carregarLista();
  }, []);

  useEffect(() => {
    console.log(state.cart);
  }, [state.cart]);



  const carregarLista = async () => {
    try {
      setLoading(true);
      let response = await fetch("https://fakestoreapi.com/products");
      let json = await response.json();
      setLoading(false);
      setLista(json);
    } catch (erro) {
      setLoading(false);
      alert("Erro! Tente mais tarde!")
    }
  };

  const AscOrder = (a: Produto, b: Produto) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  };

  const RegularOrder = (a: Produto, b: Produto) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  };

  if (state.main.lowerprice === true) {
    lista.sort(AscOrder);
  } else {
    lista.sort(RegularOrder);
  }


  if (params.categoria === "masculinas") {
    categoria = "men's clothing";
  } else {
    if (params.categoria === "femininas") {
      categoria = "women's clothing"
    } else {
      if (params.categoria === "joias") {
        categoria = "jewelery"
      } else {
        if (params.categoria === "eletronicos") {
          categoria = "electronics"
        }
      }
    }
  }

  let lista2 = lista.filter((item) => item.category === categoria);

  if (!params.categoria) {
    lista2 = lista;
  };


  const addclick = (i: number) => {


    dispatch({
      type: "ADD_CART",
      payload: {
        id: lista[i].id,
        title: lista[i].title,
        price: lista[i].price,
        description: lista[i].description,
        category: lista[i].category,
        image: lista[i].image
      }

    })
    console.log(state.cart)
  };


  return (

    <>
      <h3>PRODUTOS</h3>

      {loading &&
        <div className="loading">
        </div>
      }



      <div className="catalogo-area">
        {lista2.map((item, index) => (


          <div key={index} className="catalogo-item">
            <img src={item.image} alt="Produto {index}" className="catalogo-img" />
            <div className="catalogo-id">Cód.: {item.id}</div>
            <div className="catalogo-title">{item.title}</div>
            <div className="catalogo-price">R$ {item.price.toFixed(2)}</div>
            <div className="catalogo-category">cat.: {item.category}</div>
            <button className="catalogo-add" onClick={() => addclick(index)}>adicionar ao carrinho</button>
          </div>


        ))}
      </div>


    </>
  )
};


