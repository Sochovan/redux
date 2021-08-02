import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Task = ({ text, done, onChange, id, onDelete }) => {
  const listItemClasses = classNames("list-item", { "list-item_done": done });
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

export default Task;
