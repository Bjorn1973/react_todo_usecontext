import React, {useContext} from 'react';
import context from '../data';
import TodoListItem from './TodoListItem';


const Todolist = () => {
    const {todos, deleteTodo, toggleTodo} = useContext(context);
    const handleDeleteTodo = ()=>{
        deleteTodo(id)
    }

    const handleToggleTodo = ()=>{
      toggleTodo(id)
    }
  return <>
    <ul>
        {todos.map((todo)=>
        <TodoListItem
        key={todo.id}
        className={todo.checked}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
          />
        )}
    </ul>
  </>
}

export default Todolist