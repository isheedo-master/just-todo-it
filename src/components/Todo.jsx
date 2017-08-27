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
    return (
      <li id={`todo-${id}`}>
        <input type="checkbox"
          checked={completed}
          onChange={() => { onClick(id) }}
        />
        {text} - {formatTimestamp()}
      </li>
    )
  }
}

export default Todo;
