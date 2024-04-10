import "./CreateTodoButton.css";
function CreateTodoButton() {
    return (
      <button className="CreateTodoButton" onClick={
        (event) => {
          alert("putos todos");
        }
      }>+</button>
    );
}

export {CreateTodoButton};