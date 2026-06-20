import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";

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

  return (
    <main className="app">
      <h1>My Todos</h1>

      <AddTodoForm onAdd={addTodo} />

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <h2 className="todo-title">{todo.title}</h2>
            <p className="todo-details">{todo.details}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;