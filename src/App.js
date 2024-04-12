import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "tomar curso de react", completed: true},
  {text: "llorar con la llorona", completed: false},
  {text: "renderizando arrays", completed: false},
  {text: "memeando con chascarrillos", completed: true},
]

function App() {
  // Este es el estado de TodoSearch
  const [searchValue, setSearchValue] = React.useState("")
  console.log("los usuarios buscan todos de: " + searchValue);

  // Este es el estado de TodoItem
  const [todos, setTodos] = React.useState(defaultTodos);
  console.log("nuevo todo: " + todos);

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {/* aqui vamos a renderizar un array defaultTodos.map() a partir de un array defaultTodos */}
        {defaultTodos.map(todo => (
          // Cada componente dentro de un array debe tener una key unica
         <TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> 
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
);
}

export default App;