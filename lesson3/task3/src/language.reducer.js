import { SETLANGUAGE } from "./language.actions.js";

export const languageReducer = (state = "en", action) => {
  switch (action.type) {
    case SETLANGUAGE:
      return action.payload.lang;
    default:
      return state;
  }
};
