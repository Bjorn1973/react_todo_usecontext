import React, { useContext, useState } from 'react';
import context from '../data';

const Form = () => {
  const { addTodo } = useContext(context);
  const [input, setInput] = useState('');

  const handleInputTodo = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleInputTodo}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
