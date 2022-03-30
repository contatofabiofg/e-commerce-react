import { reducerActionType } from "../types/reducerActionType"

export type MainType = {
  lowerprice: boolean;
}

export const mainInitialState: MainType = {
  lowerprice: false
}

export const mainReducer = (state: MainType, action: reducerActionType) => {

  switch (action.type) {
    case "CHANGE_LOWERPRICE":
      return { ...state, lowerprice: action.payload.lowerprice }
  }

  return state;
}