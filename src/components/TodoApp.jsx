import React, { Component } from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { getTodos, setTodos, filterTodos } from '../api/TodoAPI';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: true,
      searchText: '',
      todos: getTodos()
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoToggle = this.handleTodoToggle.bind(this);
  }


  /**
   * Saves the todos to local storage on app update
   */
  componentDidUpdate() {
    setTodos(this.state.todos);
  }

  /**
   * The method handles adding new todos
   *
   * @param string
   */
  handleTodoAdd(todoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todoText,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }

  /**
   * The method handles text search
   *
   * @param bool, string
   */
  handleSearch(completed, term) {
    this.setState({
      showCompleted: !completed,
      searchText: term.toLowerCase()
    });
  }

  /**
   * The method handles filter toggle
   *
   * @param string
   */
  handleTodoToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = filterTodos(todos, showCompleted, searchText);
    return (
      <main className="panel">
        <header className="panel__header">
          <h1 className="text-uppercase">Just ToDo it!</h1>
        </header>
        <section className="panel__body">
          <TodoSearch onSearch={this.handleSearch} />
          <TodoList todos={filteredTodos} onTodoToggle={this.handleTodoToggle} />
        </section>
        <footer className="panel__footer">
          <AddTodo onTodoAdd={this.handleTodoAdd} />
        </footer>
      </main>
    )
  }
}

export default TodoApp;
