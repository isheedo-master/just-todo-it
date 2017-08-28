import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {

  render() {
    const { id, text, completed, createdAt, completedAt, onClick } = this.props;
    const formatTimestamp = () => {
      let message = 'Created on ';
      let timestamp = createdAt;
      if (completed) {
        message = 'Completed on ';
        timestamp = completedAt;
      }
      return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm A')}`;
    }
    let todoClass = completed ? 'completed' : 'ongoing';
    return (
      <li id={`todo-${id}`} className="todo">
        <label className="todo__checkbox">
          <span className={`todo__checkbox__holder todo__checkbox__holder--${todoClass}`}></span>
          <input type="checkbox"
            checked={completed}
            onChange={() => { onClick(id) }}
          />
        </label>
        <span className={`todo__name todo__name--${todoClass}`}>
          {text}
        </span>
        <span className={`todo__timestamp todo__timestamp--${todoClass}`}>
          {formatTimestamp()}
        </span>
      </li>
    )
  }
}

export default Todo;
