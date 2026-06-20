import Button from "./Button";

function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <div className="todo-text">
        <h2 className="todo-title">{todo.title}</h2>
        <p className="todo-details">{todo.details}</p>
      </div>

      <div className="todo-actions">
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