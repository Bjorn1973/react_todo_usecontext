import React, { useContext } from 'react';
import context from '../data';

const TodoListItem = ({ id, name, checked }) => {
  const { deleteTodo, toggleTodo } = useContext(context);

  return (
    <li className={checked ? 'checked' : ''}>
      <span>{name}</span>
      <button onClick={() => toggleTodo(id)}>{checked ? 'uncheck' : 'check'}</button>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
};

export default TodoListItem;