import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

// const defaultTodos = [
//   {text: "Cortar cebolla", completed: true}, 
//   {text: "tomar curso de react", completed: true},
//   {text: "llorar con la llorona", completed: false},
//   {text: "renderizando arrays", completed: false},
//   {text: "memeando con chascarrillos", completed: true},
// ]

// localStorage.setItem('todos_v1', JSON.stringify())

function App() {
  const localStorageTodos = localStorage.getItem('todos_v1');
  let parsedTodos = JSON.parse(localStorageTodos);

  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos)
  } else {
    localStorage.setItem("todos_v1", JSON.stringify([]))
    parsedTodos = [];
  }

  // Este es el estado de TodoItem
  const [todos, setTodos] = React.useState(parsedTodos);
  console.log("nuevo todo: " + todos);

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length
  const totalTodos = todos.length;

  // Este es el estado de TodoSearch
  const [searchValue, setSearchValue] = React.useState("")
  console.log("los usuarios buscan todos de: " + searchValue.toLowerCase());
  
  const searchedTodos = todos.filter(
    (todo) => todo.text.toLowerCase().includes(searchValue)
  );

  const saveTodos = (newTodos) => {
    setTodos(newTodos)
    localStorage.setItem("todos_v1", JSON.stringify(newTodos))
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {/* aqui vamos a renderizar un array defaultTodos.map() a partir de un array defaultTodos */}
        {searchedTodos.map(todo => (
          // Cada componente dentro de un array debe tener una key unica
         <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/> 
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
);
}

export default App;