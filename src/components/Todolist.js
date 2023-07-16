// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   const removeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default TodoList;
