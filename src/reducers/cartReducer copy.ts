import { reducerActionType } from "../types/reducerActionType";
import { Produto } from "../types/produtoType";

export interface cartType extends Array<Produto> { };


export const cartInitialState: cartType = [{
  id: 0,
  title: "teste",
  price: 0,
  description: "",
  category: "",
  image: "",
}]

export const cartReducer = (state: cartType, action: reducerActionType) => {

  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: action.payload.cart }

      return state;
  }
}
