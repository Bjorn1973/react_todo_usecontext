import React, { useContext } from 'react'
import context from '../data';

const Form = () => {
    const {todos, addTodo} = useContext(context)

    // const handleAddTodo = (e)=>{
    //     addTodo(e.target.value)
    // }

  return <>
    <div>
        <input type="text" />
        <button >Add</button>
    </div>
    </>
}

export default Form