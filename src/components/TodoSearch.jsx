import React, { Component } from 'react';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  /**
   * The method handles text search
   */
  handleSearch() {
    var { onSearch } = this.props;
    var showCompleted = this.refs.toggleDone.checked;
    var searchText = this.refs.searchText.value;

    onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <form>
        <div>
          <input ref="searchText" type="text"
            placeholder="Search Todos"
            onChange={this.handleSearch}
          />
        </div>
        <div>
          <label>
            <input ref="toggleDone" type="checkbox"
              onChange={this.handleSearch}
            />
            Show/hide completed todos
          </label>
        </div>
      </form>
    );
  }
}

export default TodoSearch;
