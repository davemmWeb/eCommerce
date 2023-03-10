import { SHOPPING_CAR } from "./actions";

const initialState = {
  shoppingCar: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOPPING_CAR:
      return {
        ...state,
        shoppingCar: [...state.shoppingCar, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
