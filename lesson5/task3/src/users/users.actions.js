export const ONCHANGE_FILTER_TEXT = 'USERS/ONCHANGE_FILTER_TEXT';

export const onChangeFilterText = (text) => {
  return {
    type: ONCHANGE_FILTER_TEXT,
    payload: {
      text,
    },
  };
};