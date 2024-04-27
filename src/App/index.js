import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI"
import React from "react";

function App() {
  // Este es el estado de TodoItem
  const [todos, saveTodos] = useLocalStorage('todos_v1', []);
  // console.log("nuevo todo: " + todos);

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length
  const totalTodos = todos.length;

  console.log('log 1');

  React.useEffect(() => {
    console.log('l0000000000og 2');
  });

  React.useEffect(() => {
    console.log('l0000000000og 2.5');
  }, [totalTodos]);

  console.log('log 3');

  
  // Este es el estado de TodoSearch
  const [searchValue, setSearchValue] = React.useState("")
  // console.log("los usuarios buscan todos de: " + searchValue.toLowerCase());
  
  const searchedTodos = todos.filter(
    (todo) => todo.text.toLowerCase().includes(searchValue)
  );

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

  return(
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;