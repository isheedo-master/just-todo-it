/**
 *
 * The method sets the list of todos to the local storage
 *
 * @param array
 */
export function setTodos(todos) {
  if (todos instanceof Array) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
}

/**
 *
 * The method gets the list of todos from the local storage
 *
 * @param string
 * @returns array
 */
export function getTodos() {
  const stringTodos = localStorage.getItem('todos');
  let todos = [];
  try {
    todos = JSON.parse(stringTodos);
  } catch (error) {
    console.log('Oops the data is invalid');
  }

  if (todos instanceof Array) {
    return todos;
  } else {
    return [];
  }
}

/**
 *
 * The method sorts and filters the todos array
 *
 * @param array, bool, string
 * @returns array
 */
export function filterTodos(todos, showCompleted, searchText) {

  let filteredTodos = todos;

  filteredTodos = filteredTodos.filter((todo) => {
    return !todo.completed || showCompleted;
  });

  filteredTodos = filteredTodos.filter((todo) => {
    const text = todo.text.toLowerCase();
    return searchText.lenght === 0 || text.indexOf(searchText) > -1;
  });

  filteredTodos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  });

  return filteredTodos;
}
