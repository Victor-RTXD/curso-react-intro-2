import "./CreateTodoButton.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const toggleModal = () => setOpenModal(!openModal);

    return (
      <button className="CreateTodoButton" onClick={
        (event) => { toggleModal() }
      }>+</button>
    );
}

export {CreateTodoButton};