import React from "react";
import "./TodoForm.css"

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label> Escribe tu nuevo todo:</label>
            <textarea placeholder="Cortar cebolla para la mini"/>
            <div className="TodoForm-buttonContainer">
                <button type="" className="TodoForm-button TodoForm-button--cancel">X</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">✔️</button>
            </div>
        </form>
    );
}

export { TodoForm };