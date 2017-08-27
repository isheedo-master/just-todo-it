import React, { Component } from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { getTodos, setTodos, filterTodos, fuck } from '../api/TodoAPI';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
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
      showCompleted: completed,
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
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onTodoToggle={this.handleTodoToggle} />
        <AddTodo onTodoAdd={this.handleTodoAdd} />
      </div>
    )
  }
}

export default TodoApp;
