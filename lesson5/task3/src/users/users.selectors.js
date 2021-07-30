import { createSelector } from "reselect";

export const filterTextSelector = (state) => state.users.filterText;
export const usersListSelector = (state) => state.users.usersList;

export const filteredUsersListSelector = createSelector(
  [filterTextSelector, usersListSelector],
  (filterText, usersList) => {
    console.log(filterText);
    return filterText === ""
      ? usersList
      : usersList.filter((user) =>
          user.name.toLowerCase().includes(filterText.toLowerCase())
        );
  }
);
