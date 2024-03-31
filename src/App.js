import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "tomar curso de react", completed: false},
  {text: "llorar con la llorona", completed: false},
  {text: "renderizando arrays", completed: false},
]

function App() {
  return (
    // <div className="App">
    <>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {/* aqui vamos a renderizar un array defaultTodos.map() a partir de un array defaultTodos */}
        {defaultTodos.map(todo => (
          // Cada componente dentro de un array debe tener una key unica
         <TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> 
        ))}
      </TodoList>

      <CreateTodoButton />
    {/* </div> */}
    </>
);
}

export default App;