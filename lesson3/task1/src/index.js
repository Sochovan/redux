import store from "./store.js";
import { increment, decrement, reset } from "./counter.actions";
import { addUser, deleteUser, updateUser } from "./users.actions";
// const onAdd = () => {
//   store.dispatch(addUser({ id: 77, name: "Nastya" }));
// };

// const onDelete = () => {
//   store.dispatch(deleteUser(77));
// };

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(addUser({ id: 1, name: "Nastya" }));
store.dispatch(addUser({ id: 2, name: "Bob" }));
store.dispatch(deleteUser(2));
store.dispatch(updateUser(1, { surname: "Sochovan", age: 37 }));
