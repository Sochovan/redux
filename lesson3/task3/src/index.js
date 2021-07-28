import store from "./store.js";
import { setLanguage } from "./language.actions.js";
import { setUser, removeUser } from "./user.actions.js";
import { addProduct, removeProduct } from "./cart.actions.js";


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setUser({ id: 1, name: "Nastya" }));
store.dispatch(setUser({ id: 2, name: "Bob" }));
store.dispatch(removeUser());

store.dispatch(addProduct({ id: 5, name: "dress" }));
store.dispatch(addProduct({ id: 801, name: "coat" }));
store.dispatch(removeProduct(801));

store.dispatch(setLanguage("jp"));
