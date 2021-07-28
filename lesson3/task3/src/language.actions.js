export const SETLANGUAGE = "LANGUAGE/SETLANGUAGE";

export const setLanguage = (lang) => {
  return {
    type: SETLANGUAGE,
    payload: { lang },
  };
};
