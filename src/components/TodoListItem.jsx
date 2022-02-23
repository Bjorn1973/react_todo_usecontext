// import React, {useContext} from 'react';
// import context from '../data';

// const TodoListItem = () => {
  
//     const {todos, deleteTodo, toggleTodo} = useContext(context);
//     console.log(todos)

//   return (
//     todos.map(todo =>
//     <li key={todo.id} className={todo.checked? "checked": ""}>
//         <span >{todo.name}</span>
//         <button onClick={toggleTodo(todo.id)}>{todo.checked? "uncheck" : "check"}</button>
//         <button onClick={deleteTodo(todo.id)}>delete</button>
//     </li>)
//   )
// }

// export default TodoListItem