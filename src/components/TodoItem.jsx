import Button from "./Button";

function TodoItem({ todo, onDelete, onToggle }) {
  const itemClass = todo.done ? "todo-item is-done" : "todo-item";

  return (
    <li className={itemClass}>
      <div className="todo-text">
        <h2 className="todo-title">{todo.title}</h2>
        <p className="todo-details">{todo.details}</p>
      </div>

      <div className="todo-actions">
        <Button
          label={todo.done ? "Undo" : "Complete"}
          variant={todo.done ? "neutral" : "success"}
          onClick={() => onToggle(todo.id)}
          ariaLabel={
            todo.done
              ? `Mark task ${todo.title} as active`
              : `Mark task ${todo.title} as complete`
          }
        />
        <Button
          label="Delete"
          variant="danger"
          onClick={() => onDelete(todo.id)}
          ariaLabel={`Delete task ${todo.title}`}
        />
      </div>
    </li>
  );
}

export default TodoItem;