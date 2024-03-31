import './TodoCounter.css';

function TodoCounter({completed, total}) {
    return (
      //  <h1 style={{
      //    fontSize: "24px",
      //    textAlign: "center",
      //    margin: 0,
      //    padding: "48px",
      //  }}>
      //  Haz completado {completed} de {total} todos</h1>

      <h1 className='TodoCounter'>Haz completado {completed} de {total} todos</h1>
    );
}

export { TodoCounter };