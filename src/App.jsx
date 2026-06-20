import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title, details) {
    const newTodo = {
      id: Date.now(),
      title: title,
      details: details,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function deleteTodo(idToRemove) {
    setTodos((prev) => prev.filter((todo) => todo.id !== idToRemove));
  }

  function toggleTodo(idToToggle) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === idToToggle ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <main className="app">
      <h1>My Todos</h1>

      <section aria-label="Add a new task">
        <AddTodoForm onAdd={addTodo} />
      </section>

      <section aria-label="Task list">
        {todos.length === 0 ? (
          <p className="empty-msg">No tasks yet. Add your first task above.</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;