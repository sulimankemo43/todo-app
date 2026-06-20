import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanTitle = title.trim();

    if (cleanTitle === "") {
      setErrorMsg("Task name is required.");
      return;
    }

    if (cleanTitle.length > 60) {
      setErrorMsg("Task name must be 60 characters or fewer.");
      return;
    }

    onAdd(cleanTitle, details.trim());
    setTitle("");
    setDetails("");
    setErrorMsg("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit} noValidate>
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

      {errorMsg && (
        <p className="form-error" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}

export default AddTodoForm;