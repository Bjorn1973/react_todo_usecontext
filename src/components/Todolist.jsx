import TodoListItem from './TodoListItem';
import React, { useContext, useState } from 'react';
import context from '../data';

const Todolist = () => {
  const { todos } = useContext(context);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} id={todo.id} checked={todo.checked} name={todo.name} />
        ))}
      </ul>
    </>
  );
};

export default Todolist;
