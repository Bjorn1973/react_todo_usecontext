import React, {createContext,useState} from "react";
import {nanoid} from "nanoid";

export const Provider = ({children})=>{
    const [todos, setTodos] = useState([
        {id:nanoid(), name:"gras maaien", checked:false},
        {id:nanoid(), name:"poetsen", checked:false}, 
        {id:nanoid(), name:"brood bakken", checked:false}])
    console.log(todos)
    const data = {
        todos: todos,
        addTodo: (todo)=>{
            setTodos([...todos, {id:nanoid(),checked:false,todo}])
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
        }
    }
    return <dataContext.Provider value={data}>{children}</dataContext.Provider>
}

const dataContext = createContext();
export default dataContext;