import { SET_USER, REMOVE_USER } from "./user.actions.js";

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }
    case REMOVE_USER:
      return null;

    default:
      return state;
  }
};

export default usersReducer;
