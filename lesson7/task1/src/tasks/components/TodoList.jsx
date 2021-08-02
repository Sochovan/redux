import React, { Component } from "react";
import TasksList from "./TasksList.jsx";
import CreateTaskInput from "./CreateTaskInput.jsx";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as tasksAction from "../tasks.actions";
import { sortedTasksListSelector } from "../tasks.selectors.js";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />

          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};
export default connect(mapState, mapDispatch)(TodoList);

// import React from "react";
// import TasksList from "./TasksList.jsx";

// const TodoList = () => {
//   return (
//     <>
//       <h1 className="title">Todo List</h1>
//       <TasksList />
//     </>
//   );
// };

// export default TodoList;
