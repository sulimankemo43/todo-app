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

  return (
    <main className="app">
      <h1>My Todos</h1>

      <AddTodoForm onAdd={addTodo} />

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </main>
  );
}

export default App;