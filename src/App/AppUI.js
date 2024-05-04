import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";

function AppUI() {
    return(
        <>
            <TodoCounter />
            <TodoSearch />

            {/* esta forma de usar context se puede cambiar por useContext y hacerlo mas elegante, pero lo mantendre para recordar como implementarlo */}
            <TodoContext.Consumer> 
                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
                    <TodoList>
                        {/* aqui vamos a renderizar un array defaultTodos.map() a partir de un array defaultTodos */}
        
                        {loading && 
                            <>
                                <TodosLoading />
                                <TodosLoading />
                                <TodosLoading />
                            </>
                        } 
                        {error && <TodosError />} 
                        {(!loading && searchedTodos.length === 0 ) && <EmptyTodos />}
        
                        {searchedTodos.map(todo => (
                            // Cada componente dentro de un array debe tener una key unica
                            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/> 
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />
        </>
    );
}

export { AppUI };