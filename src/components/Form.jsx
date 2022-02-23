import React, { useContext, useState } from 'react';
import context from '../data';
import useLocalStorage from "../hooks/useLocalStorage";

const Form = () => {
  const { addTodo } = useContext(context);
  const [input, setInput] = useState('');
  const [todo,setTodo] = useLocalStorage("todo","")

  const handleInputTodo = (e) => {
    e.preventDefault();
    addTodo(input);
    setTodo(input)
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleInputTodo}>
        <input className="input" type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button className='add'>Add</button>
      </form>
    </>
  );
};

export default Form;
