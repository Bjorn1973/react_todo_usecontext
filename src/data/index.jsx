import React, {createContext,useState} from "react";
import {nanoid} from "nanoid";


const dataContext = createContext();

export const Provider = ({children})=>{
    const [todos, setTodos] = useState([
        {id:nanoid(), name:"gras maaien", checked:false},
        {id:nanoid(), name:"poetsen", checked:false}, 
        {id:nanoid(), name:"brood bakken", checked:false}])
    console.log(todos)

    const data = {
        todos: todos,
        setTodos: setTodos,
        addTodo: (todo)=>{
            setTodos([...todos, {id:nanoid(),checked:false,name:todo}])
        },
        deleteTodo: (id)=>{
            setTodos(setTodos(todos.filter((todo)=> todo.id !== id)))
        },
        toggleTodo: (id)=>{
            setTodos(
                todos.map(todo => {if(todo.id === id) todo.checked = !todo.checked
                return todo;
            })
        )
        return todos}
    }
    return <dataContext.Provider value={data}>{children}</dataContext.Provider>
}


export default dataContext;