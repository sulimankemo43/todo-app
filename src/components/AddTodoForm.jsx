import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(title, details);
    setTitle("");
    setDetails("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <InputField
        id="todo-title"
        label="Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task name"
      />
      <InputField
        id="todo-details"
        label="Description"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Task description"
      />
      <Button label="Add Todo" type="submit" variant="accent" />
    </form>
  );
}

export default AddTodoForm;
