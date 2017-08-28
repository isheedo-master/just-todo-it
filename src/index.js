import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

require('./style/app.scss');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app'))
;
