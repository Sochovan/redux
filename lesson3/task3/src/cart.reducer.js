import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions.js";

const initialState = {
  productsList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        productsList: state.productsList.concat(action.payload),
      };
    }
    case REMOVE_PRODUCT: {
      const newProductsList = state.productsList.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        productsList: newProductsList,
      };
    }
    default:
      return state;
  }
};
