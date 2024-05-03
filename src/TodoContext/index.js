import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading, 
    error
  } = useLocalStorage('todos_v1', []);
  // console.log("nuevo todo: " + todos);

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length
  const totalTodos = todos.length;
  
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
    return (
        <TodoContext.Provider value={{
            loading, 
            error,
            completedTodos, 
            totalTodos, 
            searchValue, 
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };