import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * The method handles Todo add form submit
   */
  handleSubmit(event) {
    event.preventDefault();
    const { onTodoAdd } = this.props;
    const todoText = this.refs.input.value;

    if (todoText.length > 0) {
      this.refs.input.value = '';
      onTodoAdd(todoText);
    } else {
      this.refs.input.focus();
    }
  }

  render() {
    const { id, text } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Add your todo text and click add button"
          ref="input"
        />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

export default AddTodo;
