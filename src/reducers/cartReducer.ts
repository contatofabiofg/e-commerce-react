import { reducerActionType } from "../types/reducerActionType";



export type cartType =
  {
    id?: number,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    qt?: number
  }



export const cartInitialState: cartType[] = [];

export const cartReducer = (state: cartType[], action: reducerActionType) => {

  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload]
  }

  switch (action.type) {
    case "DEL_CART":
      const nextState = [...state]
      nextState.splice(action.payload.i, 1)

      return nextState
  }

  switch (action.type) {
    case "ADD_CART_ITEM_NUMBER":
      const nextState = [...state]
      nextState[action.payload.i].qt! += 1
      return nextState
  }

  switch (action.type) {
    case "DEL_CART_ITEM_NUMBER":
      const nextState = [...state]
      if (nextState[action.payload.i].qt! > 1) {
        nextState[action.payload.i].qt! -= 1
      }
      return nextState
  }

  return state;
}

