import { reducerActionType } from "../types/reducerActionType";



export type cartType =
  {
    id?: number,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
  }



export const cartInitialState: cartType[] = [];

export const cartReducer = (state: cartType[], action: reducerActionType) => {

  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload]



  }
  return state;
}

