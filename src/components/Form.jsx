import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import context from '../data';

const Form = () => {
    const [todo,setTodo] = useLocalStorage("todo","")
    const {todos, addTodo} = useContext(context)

    const handleInputTodo = (e)=>{
      setTodo(e.target.value)
    };
    

  return <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      addTodo(e.target.value)
    }}>

        <input type="text" onInput={handleInputTodo}/>
        <button onClick={addTodo()}>Add</button>
    </form>
    </>
}

export default Form