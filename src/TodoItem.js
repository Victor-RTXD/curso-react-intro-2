import "./TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem({text, completed, onComplete, onDelete}) {
    return (
      <li className="TodoItem">
        {/* <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={onComplete}>V</span> */}
        <CompleteIcon />
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        <DeleteIcon />
        {/* <span className="Icon Icon-delete" onClick={onDelete}>X</span> */}
      </li>
    );
}

export {TodoItem};