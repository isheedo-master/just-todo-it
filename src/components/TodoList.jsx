import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos, onTodoToggle } = this.props;
    const renderTodos = todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          onClick={onTodoToggle}
          {...todo}
        />
      );
    });

    return (
      <ul>
        {renderTodos.length > 0 ? renderTodos : 'No ongoing todos found. Create some would you?'}
      </ul>
    )
  }
}

export default TodoList;
