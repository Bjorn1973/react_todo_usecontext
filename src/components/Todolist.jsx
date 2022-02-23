import TodoListItem from './TodoListItem';
import React, { useContext, useState } from 'react';
import context from '../data';

const Todolist = () => {
  const { todos } = useContext(context);

  return (
    <>
      <h1>TODOLIST</h1>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} id={todo.id} checked={todo.checked} name={todo.name} />
        ))}
      </ul>
    </>
  );
};

export default Todolist;
