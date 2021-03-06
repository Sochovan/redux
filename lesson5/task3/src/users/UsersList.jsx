import React from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";
import * as userActions from "./users.actions.js";
import { connect } from "react-redux";
import {
  filteredUsersListSelector,
  filterTextSelector,
} from "./users.selectors.js";

class UsersList extends React.Component {
  handleChange = (event) => {
    this.props.onChangeText(event.target.value);
  };

  render() {
    console.log(this.props.users);
    const { usersList, filterText } = this.props.users;

    return (
      <div>
        <Filter
          onChange={this.handleChange}
          filterText={filterText}
          count={usersList.length}
        />
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  debugger;
  return {
    users: {
      filterText: filterTextSelector(state),
      usersList: filteredUsersListSelector(state),
    },
  };
};

const mapDispatch = {
  onChangeText: userActions.onChangeFilterText,
};

export default connect(mapState, mapDispatch)(UsersList);
