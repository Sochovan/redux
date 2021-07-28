import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

// const onAdd = () => {
//   store.dispatch(addUser({ id: 77, name: "Nastya" }));
// };

// const onDelete = () => {
//   store.dispatch(deleteUser(77));
// };

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 1, name: "Nastya" }));
store.dispatch(addUser({ id: 4, name: "Ann" }));
store.dispatch(deleteUser(4));
store.dispatch(addUser({ id: 5, name: "Tom" }));
store.dispatch(addUser({ id: 4, name: "Bob" }));
