import { createContext, useReducer } from "react";
import { reducerActionType } from "../types/reducerActionType";
import { MainType, mainInitialState, mainReducer } from "../reducers/mainReducer";
import { cartType, cartInitialState, cartReducer } from "../reducers/cartReducer";

type initialStateType = {
  main: MainType;
  cart: cartType[];
}

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  main: mainInitialState,
  cart: cartInitialState
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
});

const globalReducer = ({ main, cart }: initialStateType, action: reducerActionType) => ({
  main: mainReducer(main, action),
  cart: cartReducer(cart, action)
})

export const ContextProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}