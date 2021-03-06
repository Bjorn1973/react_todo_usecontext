import React, { useContext } from 'react';
import context from '../data';

const TodoListItem = ({ id, name, checked }) => {
  const { deleteTodo, toggleTodo } = useContext(context);

  return (
    <li className={checked ? 'checked' : ''}>
      <span className="wrapper">
        <span>{name}</span>
       <button className="check" onClick={() => toggleTodo(id)}>{checked ? 'uncheck' : 'check'}</button>
       <button className="delete" onClick={() => deleteTodo(id)}>delete</button>
      </span>
    </li>
  );
};

export default TodoListItem;