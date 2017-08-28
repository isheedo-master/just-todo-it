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
      <ul className="todolist">
        {renderTodos.length > 0 ? renderTodos : (
          <h3 className="text-center text-uppercase text-fallback">
            'No ongoing todos found. Create some would you?'
          </h3>
        )}
      </ul>
    )
  }
}

export default TodoList;
