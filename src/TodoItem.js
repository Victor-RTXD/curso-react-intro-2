import "./TodoItem.css";

function TodoItem({text}) {
    return (
      <li className="TodoItem">
        <span className="Icon Icon-check Icon-check--active">V</span>
        <p className="TodoItem-p TodiItem-p--completed">{text}</p>
        <span className="Icon Icon-delete">X</span>
      </li>
    );
}

export {TodoItem};