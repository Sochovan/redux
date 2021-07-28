import { createStore, combineReducers } from "redux";
import { languageReducer } from "./language.reducer.js";
import { productReducer } from "./cart.reducer.js";
import usersReducer from "./user.reducer.js";

const appReducer = combineReducers({
  language: languageReducer,
  user: usersReducer,
  cart: productReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
