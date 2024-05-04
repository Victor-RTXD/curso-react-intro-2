import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
      //  <h1 style={{
      //    fontSize: "24px",
      //    textAlign: "center",
      //    margin: 0,
      //    padding: "48px",
      //  }}>
      //  Haz completado {completed} de {total} todos</h1>

      <h1 className='TodoCounter'>Haz completado 
        <span> {completedTodos} </span> 
        de 
        <span> {totalTodos} </span> 
        todos
      </h1>
    );
}

export { TodoCounter };