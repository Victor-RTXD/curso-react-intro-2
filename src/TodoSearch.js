import "./TodoSearch.css"

function TodoSearch() {
    return (
      <input className="TodoSearch" type="text" placeholder="Cortar cebolla" onChange={(event) => {
        console.log("este es todosearch");
        console.log(event)
        console.log(event.target.value)
      }} />
    );
}

export { TodoSearch };