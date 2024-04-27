import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
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

export { AppUI };